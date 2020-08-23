import * as d3 from 'd3';

import { AlcoholData } from '../types';

type Props = {
  data: AlcoholData[];
  wrapper: SVGSVGElement;
};

const createChart = ({ data, wrapper }: Props) => {
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

  svg.attr('viewBox', `0 0 ${width} ${height}`).classed('alcohol-chart', true);

  const xValue = d => d.value.toString();
  const yValue = d => d.beverages;

  const xScale = d3
    .scaleBand()
    .domain(data.map(xValue))
    .range([0, innerWidth])
    .padding(0.1);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, yValue) + 3 || 10])
    .range([innerHeight, 0]);

  const bars = svg
    .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

  bars
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', d => xScale(xValue(d)) || '')
    .attr('y', d => yScale(yValue(d)))
    .attr('width', xScale.bandwidth())
    .attr('height', d => innerHeight - yScale(yValue(d)));

  const xAxis = d3
    .axisBottom(xScale)
    .ticks(5)
    .tickFormat(d => `${d}%`);

  const xAxisGroup = bars
    .append('g')
    .call(xAxis)
    .attr('transform', `translate(0, ${innerHeight})`);

  xAxisGroup
    .append('text')
    .attr('x', 20)
    .attr('y', 20)
    .attr('fill', 'black')
    .text('Alkohol');

  const yAxis = d3
    .axisLeft(yScale)
    .ticks(5)
    .tickSize(-innerWidth);

  const yAxisGroup = bars.append('g').call(yAxis);

  yAxisGroup.select('.domain').remove();

  yAxisGroup
    .selectAll('.tick')
    .select('line')
    .attr('stroke-opacity', 0.2)
    .attr('stroke-dasharray', 2);

  yAxisGroup
    .selectAll('.tick')
    .select('text')
    .attr('dy', -5);

  yAxisGroup
    .append('text')
    .attr('x', 20)
    .attr('y', 20)
    .attr('fill', 'black')
    .text('Ilość piw');
};

export default createChart;
