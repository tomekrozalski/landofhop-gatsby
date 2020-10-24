import * as d3 from 'd3';
import { IntlShape } from 'react-intl';

import { Sizes, TopBrandsData } from '../types';

type Props = {
  data: TopBrandsData[];
  intl: IntlShape;
  sizes: Sizes;
  wrapper: SVGSVGElement;
};

const createChart = ({ data, intl, sizes, wrapper }: Props) => {
  const svg = d3.select(wrapper);

  const { height, margin, width } = sizes;
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  console.log('data', data);

  svg
    .attr('viewBox', `0 0 ${width} ${height}`)
    .classed('chart alcohol-chart', true);

  const xValue = (d: TopBrandsData) => d.amount.toString();
  const yValue = (d: TopBrandsData) => d.amount;

  const xScale = d3
    .scaleBand()
    .domain(data.map(xValue))
    .range([0, innerWidth])
    .padding(0.1);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, yValue) || 10 + 3])
    .range([innerHeight, 0]);

  const chart = svg
    .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

  const axis = chart.append('g').attr('data-attr', 'axis');

  const xAxis = d3
    .axisBottom(xScale)
    .tickSizeOuter(0)
    .tickValues(xScale.domain().filter(d => !(+d % 1)))
    .tickFormat(d => `${d}%`);

  const xAxisGroup = axis
    .append('g')
    .call(xAxis)
    .attr('transform', `translate(0, ${innerHeight})`);

  xAxisGroup
    .append('text')
    .attr('x', innerWidth)
    .attr('y', 40)
    .attr('text-anchor', 'end')
    .classed('label', true)
    .text(intl.formatMessage({ id: 'global.alcohol' }));

  const yAxis = d3
    .axisLeft(yScale)
    .ticks((d3.max(data, yValue) || 100) / 5)
    .tickSize(-innerWidth);

  const yAxisGroup = axis
    .append('g')
    .classed('y-axis-group', true)
    .call(yAxis);

  yAxisGroup.select('.domain').remove();

  yAxisGroup
    .selectAll('.tick')
    .select('text')
    .attr('dy', -5);

  yAxisGroup
    .append('text')
    .attr('x', 0)
    .attr('y', -25)
    .attr('transform', 'rotate(-90)')
    .attr('text-anchor', 'end')
    .classed('label', true)
    .text(intl.formatMessage({ id: 'global.numberOfBeverages' }));

  const barsGroup = chart.append('g').attr('data-attr', 'bars');

  barsGroup
    .selectAll('.bar')
    .data(data)
    .enter()
    .append('rect')
    .classed('bar', true)
    .attr('width', xScale.bandwidth())
    .attr('height', 0)
    .attr('x', d => xScale(xValue(d)) || '')
    .attr('y', innerHeight)
    .transition()
    .duration(1000)
    .attr('height', d => innerHeight - yScale(yValue(d)))
    .attr('y', d => yScale(yValue(d)));
};

export default createChart;
