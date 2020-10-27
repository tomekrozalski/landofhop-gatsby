import * as d3 from 'd3';

import { SiteLanguage } from 'utils/enums';
import { Fermentation as FermentationEnum } from 'components/BeverageDetails/utils/enums';
import { renderTimelineAxis } from '../../utils';
import { FermentationData, Sizes } from '../types';
// import renderBars from './renderBars';
// import renderLines from './renderLines';

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

  const initialData = data.map(({ date }) => ({
    date,
    [FermentationEnum.top]: 0,
    [FermentationEnum.bottom]: 0,
    [FermentationEnum.spontaneous]: 0,
  }));

  const xValue = (d: FermentationData) => d.date;
  const top = (d: FermentationData) => d[FermentationEnum.top];
  const bottom = (d: FermentationData) => d[FermentationEnum.bottom];
  const spontaneous = (d: FermentationData) => d[FermentationEnum.spontaneous];
  const total = (d: FermentationData) =>
    d[FermentationEnum.top] +
    d[FermentationEnum.bottom] +
    d[FermentationEnum.spontaneous];

  const xScale = d3
    .scaleBand()
    .domain(data.map(xValue))
    .range([0, innerWidth])
    .padding(0.1);

  const yScale = d3
    .scaleLinear()
    .domain([0, (d3.max(data, total) || 0) + 3])
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
    yTicks: (d3.max(data, total) || 100) / 5,
  });

  // const lines = chart.append('g').attr('data-attr', 'lines');
  // const bars = chart.append('g').attr('data-attr', 'bars');

  // const renderBarsWithDelay = ({
  //   create,
  //   values,
  // }: {
  //   create: boolean;
  //   values: AddData[];
  // }) => {
  //   renderBars({
  //     bottles,
  //     cans,
  //     chart,
  //     create,
  //     innerHeight,
  //     innerWidth,
  //     intl,
  //     lines,
  //     selection: bars,
  //     total,
  //     transitionTime: 500,
  //     values,
  //     xScale,
  //     xValue,
  //     yScale,
  //   });
  // };

  // const render = ({ init }: { init: boolean }) => {
  //   if (init) {
  //     renderBarsWithDelay({ create: true, values: initialData });
  //     renderLines({
  //       bottles,
  //       cans,
  //       selection: lines,
  //       total,
  //       values: data,
  //       xScale,
  //       xValue,
  //       yScale,
  //     });
  //   } else {
  //     const time = 1500 / data.length;

  //     data.forEach((_, index) => {
  //       setTimeout(() => {
  //         renderBarsWithDelay({
  //           create: false,
  //           values: data.map((props, i) =>
  //             i <= index
  //               ? props
  //               : {
  //                   date: props.date,
  //                   bottle: 0,
  //                   can: 0,
  //                 },
  //           ),
  //         });
  //       }, index * time);
  //     });
  //   }
  // };

  // render({ init: true });

  // const io = new IntersectionObserver(([entry], observer) => {
  //   if (entry.isIntersecting) {
  //     render({ init: false });
  //     observer.disconnect();
  //   }
  // }, {});

  // monthAxisElement.each(function observe() {
  //   io.observe(this);
  // });
};

export default createChart;
