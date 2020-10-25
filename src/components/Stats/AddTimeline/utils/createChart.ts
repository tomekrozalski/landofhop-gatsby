import * as d3 from 'd3';
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';

import { SiteLanguage } from 'utils/enums';
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

  const monthAxis = d3
    .axisBottom(xScale)
    .tickSizeOuter(0)
    .ticks(data.length)
    .tickFormat((value: string) =>
      intl.locale === SiteLanguage.pl
        ? format(new Date(value), 'MMM', { locale: pl })
        : format(new Date(value), 'MMM'),
    );

  const monthAxisElement = chart
    .append('g')
    .attr('data-attr', 'monthAxis')
    .call(monthAxis)
    .attr('transform', `translate(0, ${innerHeight})`);

  const yearAxis = d3
    .axisBottom(xScale)
    .tickSizeOuter(0)
    .ticks(data.length)
    .tickValues(
      xScale.domain().filter(d => {
        if (d === '2017-06') {
          return true;
        }

        const [, month] = d.split('-');
        return month === '01';
      }),
    )
    .tickFormat(d => `${format(new Date(d), 'yyyy')} →`);

  const yearAxisGroup = chart
    .append('g')
    .attr('data-attr', 'yearAxis')
    .call(yearAxis)
    .attr('transform', `translate(0, ${innerHeight + 20})`);

  yearAxisGroup.select('.domain').remove();
  yearAxisGroup.selectAll('.tick line').remove();
  yearAxisGroup.selectAll('.tick text').attr('text-anchor', 'start');

  const yAxis = d3
    .axisLeft(yScale)
    .ticks((d3.max(data, total) || 100) / 5)
    .tickSize(-innerWidth);

  const yAxisGroup = chart
    .append('g')
    .attr('data-attr', 'y-axis-group')
    .classed('y-axis-group', true)
    .call(yAxis);

  yAxisGroup.select('.domain').remove();

  yAxisGroup
    .selectAll('.tick')
    .select('text')
    .attr('dy', -5);

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
      delay: 500,
      innerHeight,
      innerWidth,
      intl,
      lines,
      selection: bars,
      total,
      values,
      xScale,
      xValue,
      yScale,
    });

    renderLines({
      bottles,
      cans,
      create,
      delay: 150,
      selection: lines,
      total,
      values,
      xScale,
      xValue,
      yScale,
    });
  };

  const render = ({ init }: { init: boolean }) => {
    if (init) {
      renderBarsWithDelay({ create: true, values: initialData });
    } else {
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
        }, index * 25);
      });
    }
  };

  render({ init: true });

  const io = new IntersectionObserver(([entry], observer) => {
    if (entry.isIntersecting) {
      render({ init: false });
      observer.disconnect();
    }
  }, {});

  monthAxisElement.each(function observe() {
    io.observe(this);
  });
};

export default createChart;
