import * as d3 from 'd3';
import { format } from 'date-fns';
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

  svg
    .attr('viewBox', `0 0 ${width} ${height}`)
    .classed('chart time-chart', true);

  const xValue = (d: AddData) => d.date;
  const bottle = (d: AddData) => d.bottle;
  const can = (d: AddData) => d.can;
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

  const bars = svg
    .append('g')
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

  bars
    .append('g')
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

  const yearAxisGroup = bars
    .append('g')
    .call(yearAxis)
    .attr('transform', `translate(0, ${innerHeight + 20})`);

  yearAxisGroup.select('.domain').remove();
  yearAxisGroup.selectAll('.tick line').remove();
  yearAxisGroup.selectAll('.tick text').attr('text-anchor', 'start');

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

  bars
    .selectAll('.bottle')
    .data(data)
    .enter()
    .append('rect')
    .classed('bottle', true)
    .attr('x', d => xScale(xValue(d)) || '')
    .attr('y', d => yScale(bottle(d)))
    .attr('width', xScale.bandwidth())
    .attr('height', d => innerHeight - yScale(bottle(d)));

  bars
    .selectAll('.can')
    .data(data)
    .enter()
    .append('rect')
    .classed('can', true)
    .attr('x', d => xScale(xValue(d)) || '')
    .attr('y', d => yScale(can(d)) - innerHeight + yScale(bottle(d)))
    .attr('width', xScale.bandwidth())
    .attr('height', d => innerHeight - yScale(can(d)));
};

export default createChart;
