import * as d3 from 'd3';

import { SiteLanguage } from 'utils/enums';
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

  console.log('data', data);

  const xValue = (d: TopBrandsData) => d.date;
  // const brand = (d: TopBrandsData) => d.brands.find(({id}) => id);

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

  const lines = chart.append('g').attr('data-attr', 'lines');

  const renderLinesWithDelay = ({
    create,
    values,
  }: {
    create: boolean;
    values: TopBrandsData[];
  }) => {
    renderLines({
      create,
      selection: lines,
      values,
      xScale,
      xValue,
      yScale,
    });
  };

  const render = ({ init }: { init: boolean }) => {
    if (init) {
      renderLinesWithDelay({ create: true, values: data });
    } else {
      const time = 1500 / data.length;

      data.forEach((_, index) => {
        setTimeout(() => {
          renderLinesWithDelay({
            create: index === 0,
            values: data.slice(0, index + 1),
          });
        }, index * time);
      });
    }
  };

  render({ init: true });

  // const io = new IntersectionObserver(
  //   ([entry], observer) => {
  //     if (entry.isIntersecting) {
  //       render({ init: false });
  //       observer.disconnect();
  //     }
  //   },
  //   { threshold: 0.8 },
  // );

  // io.observe(wrapper);
};

export default createChart;
