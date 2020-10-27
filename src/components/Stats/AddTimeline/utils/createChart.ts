import * as d3 from 'd3';

import { SiteLanguage } from 'utils/enums';
import { renderTimelineAxis } from '../../utils';
import { AddData, Sizes } from '../types';
import renderBars from './renderBars';
import renderLines from './renderLines';

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

  const initialData = data.map(({ date }) => ({
    date,
    can: 0,
    bottle: 0,
  }));

  const xValue = (d: AddData) => d.date;
  const bottles = (d: AddData) => d.bottle;
  const cans = (d: AddData) => d.can;
  const total = (d: AddData) => d.bottle + d.can;

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

  const lines = chart.append('g').attr('data-attr', 'lines');
  const bars = chart.append('g').attr('data-attr', 'bars');

  const renderBarsWithDelay = ({
    create,
    values,
  }: {
    create: boolean;
    values: AddData[];
  }) => {
    renderBars({
      bottles,
      cans,
      chart,
      create,
      innerHeight,
      innerWidth,
      intl,
      lines,
      selection: bars,
      total,
      transitionTime: 250,
      values,
      xScale,
      xValue,
      yScale,
    });
  };

  const render = ({ init }: { init: boolean }) => {
    if (init) {
      renderBarsWithDelay({ create: true, values: initialData });
      renderLines({
        bottles,
        cans,
        selection: lines,
        total,
        values: data,
        xScale,
        xValue,
        yScale,
      });
    } else {
      const time = 500 / data.length;

      data.forEach((_, index) => {
        setTimeout(() => {
          renderBarsWithDelay({
            create: false,
            values: data.map((props, i) =>
              i <= index
                ? props
                : {
                    date: props.date,
                    bottle: 0,
                    can: 0,
                  },
            ),
          });
        }, index * time);
      });
    }
  };

  render({ init: true });

  const io = new IntersectionObserver(
    ([entry], observer) => {
      if (entry.isIntersecting) {
        render({ init: false });
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
