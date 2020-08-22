import * as d3 from 'd3';

import { AlcoholData } from '../types';

type Props = {
  data: AlcoholData[];
  wrapper: SVGSVGElement;
};

const createChart = ({ data, wrapper }: Props) => {
  const svg = d3.select(wrapper);

  console.log('data', data);

  const margin = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  };

  const width = 1160;
  const innerWidth = width - margin.left - margin.right;
  const height = 600;
  const innerHeight = height - margin.top - margin.bottom;

  svg.attr('viewBox', `0 0 ${width} ${height}`).classed('alcohol-chart', true);

  const xScale = d3
    .scaleBand()
    .domain(data.map(d => d.value.toString()))
    .range([0, innerWidth]);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, d => d.beverages) || 10])
    .range([0, innerHeight]);

  console.log('-->', xScale.domain());

  svg
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', d => xScale(d.value.toString()) || '')
    .attr('y', d => innerHeight - yScale(d.beverages))
    .attr('width', xScale.bandwidth())
    .attr('height', d => yScale(d.beverages));
};

export default createChart;
