import * as d3 from 'd3';
import { format, getMonth } from 'date-fns';
import { pl } from 'date-fns/locale';

import { SiteLanguage } from 'utils/enums';
import { AddData } from '../types';

type Props = {
  data: AddData[];
  intl: {
    formatMessage: ({ id }: { id: string }) => string;
    locale: SiteLanguage;
  };
  wrapper: SVGSVGElement;
};

const createChart = ({ data, intl, wrapper }: Props) => {
  const svg = d3.select(wrapper);

  const margin = {
    top: 40,
    right: 40,
    bottom: 40,
    left: 40,
  };

  const width = 1160;
  const innerWidth = width - margin.left - margin.right;
  const height = 600;
  const innerHeight = height - margin.top - margin.bottom;

  svg.attr('viewBox', `0 0 ${width} ${height}`).classed('time-chart', true);

  const xValue = (d: AddData) => d.date;
  const bottle = (d: AddData) => d.bottle;
  const can = (d: AddData) => d.can;
  const total = (d: AddData) => d.total;

  const xScale = d3
    .scaleTime()
    .domain([data[0].date, data[data.length - 1].date])
    .range([0, innerWidth]);

  const yScale = d3
    .scaleLinear()
    .domain([0, (d3.max(data, total) || 0) + 3])
    .range([innerHeight, 0]);

  const bars = svg
    .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

  const xAxis = d3
    .axisBottom(xScale)
    .tickSizeOuter(0)
    .ticks(data.length)
    // .tickValues(
    //   data.map(({ date }) => {
    //     // if (!getMonth(date)) {
    //     //   return intl.locale === SiteLanguage.pl
    //     //     ? format(date, 'MMM yyyy', { locale: pl })
    //     //     : format(date, 'MMM yyyy');
    //     // }

    //     console.log('date', date);

    //     return intl.locale === SiteLanguage.pl
    //       ? format(date, 'MMM', { locale: pl })
    //       : format(date, 'MMM');
    //   }),
    // )
    .tickFormat((date: Date) => {
      if (!getMonth(date)) {
        return intl.locale === SiteLanguage.pl
          ? format(date, 'MMM yyyy', { locale: pl })
          : format(date, 'MMM yyyy');
      }

      return intl.locale === SiteLanguage.pl
        ? format(date, 'MMM', { locale: pl })
        : format(date, 'MMM');
    });

  const xAxisGroup = bars
    .append('g')
    .call(xAxis)
    .attr('transform', `translate(0, ${innerHeight})`);

  xAxisGroup
    .selectAll('.tick text')

    .attr('text-anchor', 'end');

  // xAxisGroup
  //   .append('text')
  //   .attr('x', innerWidth)
  //   .attr('y', 40)
  //   .attr('text-anchor', 'end')
  //   .classed('label', true)
  //   .text(formatMessage({ id: 'global.alcohol' }));

  const yAxis = d3
    .axisLeft(yScale)
    .ticks((d3.max(data, total) || 100) / 5)
    .tickSize(-innerWidth);

  const yAxisGroup = bars
    .append('g')
    .classed('y-axis-group', true)
    .call(yAxis);

  yAxisGroup.select('.domain').remove();

  yAxisGroup
    .selectAll('.tick')
    .select('text')
    .attr('dy', -5);

  // yAxisGroup
  //   .append('text')
  //   .attr('x', 0)
  //   .attr('y', 20)
  //   .attr('text-anchor', 'start')
  //   .classed('label', true)
  //   .text(formatMessage({ id: 'global.numberOfBeverages' }));

  bars
    .selectAll('.bottle')
    .data(data)
    .enter()
    .append('rect')
    .classed('bottle', true)
    .attr('x', d => xScale(xValue(d)) || '')
    .attr('y', d => yScale(bottle(d)))
    .attr('width', 15)
    .attr('height', d => innerHeight - yScale(bottle(d)));

  bars
    .selectAll('.can')
    .data(data)
    .enter()
    .append('rect')
    .classed('can', true)
    .attr('x', d => xScale(xValue(d)) || '')
    .attr('y', d => yScale(can(d)) - innerHeight + yScale(bottle(d)))
    .attr('width', 15)
    .attr('height', d => innerHeight - yScale(can(d)));
};

export default createChart;
