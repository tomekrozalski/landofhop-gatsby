import * as d3 from 'd3';

import { SiteLanguage } from 'utils/enums';
import { Fermentation as FermentationEnum } from 'components/BeverageDetails/utils/enums';
import { renderTimelineAxis } from '../../utils';
import { FermentationData, Sizes } from '../types';

type Props = {
  data: FermentationData[];
  intl: {
    formatMessage: ({ id }: { id: string }, values?: any) => string;
    locale: SiteLanguage;
  };
  sizes: Sizes;
  wrapper: SVGSVGElement;
};

const createChart = ({ data, intl, sizes, wrapper }: Props) => {
  const svg = d3.select(wrapper);

  const { height, margin, width } = sizes.chart;
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // Define horizontal scale

  const xValue = (d: FermentationData) => d.date;

  const xScale = d3
    .scaleBand()
    .domain(data.map(xValue))
    .range([0, innerWidth])
    .padding(0.1);

  // Define vertical scale

  const top = (d: FermentationData) => d[FermentationEnum.top];
  const bottom = (d: FermentationData) => d[FermentationEnum.bottom];
  const spontaneous = (d: FermentationData) => d[FermentationEnum.spontaneous];
  const total = (d: FermentationData) =>
    d[FermentationEnum.top] +
    d[FermentationEnum.bottom] +
    d[FermentationEnum.spontaneous];

  const yScale = d3
    .scaleLinear()
    .domain([0, (d3.max(data, total) || 0) + 3])
    .range([innerHeight, 0]);

  // Translate the chart and add axis

  const chart = svg
    .append('g')
    .attr('data-attr', 'chart')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

  renderTimelineAxis({
    chart,
    innerHeight,
    innerWidth,
    intl,
    values: data,
    xScale,
    yScale,
    yTicks: (d3.max(data, total) || 100) / 5,
  });

  // ----------------------------------------------------
  // behaviour on mouse cursor over

  function handleMouseOver(this: SVGPathElement | SVGTextElement) {
    const badge = this.classList[1];
    function isNotCurrent(this: any) {
      return this.classList[1] !== badge;
    }
    d3.selectAll('.fermentation-chart .line-path').classed(
      'fade-out',
      isNotCurrent,
    );
  }

  function handleMouseOut() {
    d3.selectAll('.fermentation-chart .fade-out').classed('fade-out', false);
  }

  // ----------------------------------------------------
  // Add hidden lines

  const lines = chart.append('g').attr('data-attr', 'lines');

  const lineGenerator = (type: any) =>
    d3
      .line<FermentationData>()
      .x(d => xScale(xValue(d)) || 0)
      .y(d => yScale(type(d)))
      .curve(d3.curveBasis);

  function getTotalLength(this: SVGPathElement) {
    return this.getTotalLength() + 20;
  }

  const types = { top, bottom, spontaneous };

  Object.entries(types).forEach(([name, func]) => {
    lines
      .append('path')
      .datum<any>(data)
      .classed(`line-path ${name}`, true)
      .attr('d', lineGenerator(func))
      .attr('transform', `translate(${xScale.bandwidth() / 2}, 0)`)
      .attr('stroke-dashoffset', getTotalLength)
      .attr('stroke-dasharray', getTotalLength)
      .on('mouseover', handleMouseOver)
      .on('mouseout', handleMouseOut);
  });

  // Reveal lines and label when the chart is visible

  const reveal = () => {
    Object.keys(types).forEach(name => {
      lines
        .select(`.line-path.${name}`)
        .transition()
        .duration(1500)
        .ease(d3.easeSin)
        .attr('stroke-dashoffset', 0);
    });
  };

  const io = new IntersectionObserver(
    ([entry], observer) => {
      if (entry.isIntersecting) {
        reveal();
        observer.disconnect();
      }
    },
    { threshold: 0.8 },
  );

  io.observe(wrapper);
};

export default createChart;
