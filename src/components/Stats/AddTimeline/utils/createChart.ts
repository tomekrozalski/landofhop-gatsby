import * as d3 from 'd3';

import { SiteLanguage } from 'utils/enums';
import { renderTimelineAxis } from '../../utils';
import { AddData, Sizes } from '../types';
import renderBars from './renderBars';

type Props = {
  data: AddData[];
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

  const xValue = (d: AddData) => d.date;

  const xScale = d3
    .scaleBand()
    .domain(data.map(xValue))
    .range([0, innerWidth])
    .padding(0.1);

  // Define vertical scale

  const bottles = (d: AddData) => d.bottle;
  const cans = (d: AddData) => d.can;
  const total = (d: AddData) => d.bottle + d.can;

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
      return !this.classList.contains(badge);
    }
    d3.selectAll('.time-chart .line-path').classed('fade-out', isNotCurrent);
    d3.selectAll('.time-chart .legend > g').classed('fade-out', isNotCurrent);
  }

  function handleMouseOut() {
    d3.selectAll('.time-chart .fade-out').classed('fade-out', false);
  }

  // ----------------------------------------------------
  // Add hidden lines

  const lines = chart.append('g').attr('data-attr', 'lines');

  const lineGenerator = (type: any) =>
    d3
      .line<AddData>()
      .x(d => xScale(xValue(d)) || 0)
      .y(d => yScale(type(d)))
      .curve(d3.curveBasis);

  function getTotalLength(this: SVGPathElement) {
    return this.getTotalLength();
  }

  [cans, bottles, total].forEach(type => {
    lines
      .append('path')
      .datum<any>(data)
      .classed(`line-path ${type.name}`, true)
      .attr('d', lineGenerator(type))
      .attr('transform', `translate(${xScale.bandwidth() / 2}, 0)`)
      .attr('stroke-dashoffset', getTotalLength)
      .attr('stroke-dasharray', getTotalLength)
      .on('mouseover', handleMouseOver)
      .on('mouseout', handleMouseOut);
  });

  const bars = chart.append('g').attr('data-attr', 'bars');

  const reveal = () => {
    [cans, bottles, total].forEach(type => {
      const duration = 1500;
      const time = duration / data.length;

      lines
        .select(`.line-path.${type.name}`)
        .transition()
        .duration(duration)
        .delay(1000)
        .ease(d3.easeSin)
        .attr('stroke-dashoffset', 0);

      data.forEach((_, index) => {
        setTimeout(() => {
          renderBars({
            bottles,
            cans,
            chart,
            create: index === 0,
            innerHeight,
            innerWidth,
            intl,
            lines,
            selection: bars,
            total,
            transitionTime: 11250,
            values: data.map((props, i) => {
              if (i <= index) {
                return props;
              }

              return {
                ...props,
                can: 1,
                bottle: 1,
              };
            }),
            xScale,
            xValue,
            yScale,
          });
        }, 500 * (index + 1));
      });
    });
  };

  const io = new IntersectionObserver(
    ([entry], observer) => {
      if (entry.isIntersecting) {
        reveal();
        observer.disconnect();
      }
    },
    {
      threshold: 0.8,
    },
  );

  io.observe(wrapper);
};

export default createChart;
