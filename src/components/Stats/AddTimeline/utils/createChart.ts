import * as d3 from 'd3';
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';

import { SiteLanguage } from 'utils/enums';
import { AddData, Sizes } from '../types';

type Props = {
  data: AddData[];
  intl: {
    formatMessage: ({ id }: { id: string }) => string;
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

  chart
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

  const bars = chart.append('g').attr('data-attr', 'bars');

  bars
    .selectAll('.bottle')
    .data(data)
    .enter()
    .append('rect')
    .classed('bottles', true)
    .attr('x', d => xScale(xValue(d)) || '')
    .attr('y', d => yScale(bottles(d)))
    .attr('width', xScale.bandwidth())
    .attr('height', d => innerHeight - yScale(bottles(d)));

  bars
    .selectAll('.can')
    .data(data)
    .enter()
    .append('rect')
    .classed('cans', true)
    .attr('x', d => xScale(xValue(d)) || '')
    .attr('y', d => yScale(cans(d)) - innerHeight + yScale(bottles(d)))
    .attr('width', xScale.bandwidth())
    .attr('height', d => innerHeight - yScale(cans(d)));

  const lineGenerator = (type: any) =>
    d3
      .line<AddData>()
      .x(d => xScale(xValue(d)) || 0)
      .y(d => yScale(type(d)))
      .curve(d3.curveBasis);

  const lines = chart.append('g').attr('data-attr', 'lines');

  lines
    .append('path')
    .datum<any>(data)
    .attr('d', lineGenerator(cans))
    .attr('transform', `translate(${xScale.bandwidth() / 2}, 0)`)
    .classed('line-path line-path--cans', true);

  lines
    .append('path')
    .datum<any>(data)
    .attr('d', lineGenerator(bottles))
    .attr('transform', `translate(${xScale.bandwidth() / 2}, 0)`)
    .classed('line-path line-path--bottles', true);

  lines
    .append('path')
    .datum<any>(data)
    .attr('d', lineGenerator(total))
    .attr('transform', `translate(${xScale.bandwidth() / 2}, 0)`)
    .classed('line-path line-path--total', true);
};

export default createChart;
