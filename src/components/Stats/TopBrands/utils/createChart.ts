import * as d3 from 'd3';

import { SiteLanguage } from 'utils/enums';
import { getValueByLanguage } from 'utils/helpers';
import { renderTimelineAxis } from '../../utils';
import { TopBrandsData, Sizes } from '../types';
import renderLines from './renderLines';

type Props = {
  data: TopBrandsData[];
  intl: {
    formatMessage: ({ id }: { id: string }, values?: any) => string;
    locale: SiteLanguage;
  };
  sizes: Sizes;
  wrapper: SVGSVGElement;
};

const createChart = ({ data, intl, sizes, wrapper }: Props) => {
  const svg = d3.select(wrapper);

  const { height, margin, width } = sizes;
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const xValue = (d: TopBrandsData) => d.date;

  const xScale = d3
    .scaleBand()
    .domain(data.map(xValue))
    .range([0, innerWidth])
    .padding(0.1);

  const highestValue = Math.max(
    ...data[data.length - 1].brands.map(({ amount }) => amount),
  );

  const yScale = d3
    .scaleLinear()
    .domain([0, highestValue + 3])
    .range([innerHeight, 0]);

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
    yTicks: highestValue / 5,
  });

  const labels = chart.append('g').attr('data-attr', 'labels');

  data[data.length - 1].brands.forEach(({ amount, name }) => {
    labels
      .append('text')
      .attr('x', innerWidth)
      .attr('y', yScale(amount))
      .attr('dominant-baseline', 'middle')
      .text(getValueByLanguage(name, intl.locale).value);
  });

  const lines = chart.append('g').attr('data-attr', 'lines');

  const render = () => {
    const time = 10000 / data.length;

    data.forEach((_, index) => {
      setTimeout(() => {
        renderLines({
          create: index === 0,
          selection: lines,
          values: data.slice(0, index + 1),
          xScale,
          xValue,
          yScale,
        });
      }, index * time);
    });
  };

  const io = new IntersectionObserver(
    ([entry], observer) => {
      if (entry.isIntersecting) {
        render();
        observer.disconnect();
      }
    },
    { threshold: 0.8 },
  );

  io.observe(wrapper);
};

export default createChart;
