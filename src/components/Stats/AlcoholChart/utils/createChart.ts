import * as d3 from 'd3';

import { AlcoholData } from '../types';

type Props = {
  data: AlcoholData[];
  formatMessage: ({ id }: { id: string }) => string;
  wrapper: SVGSVGElement;
};

const createChart = ({ data, formatMessage, wrapper }: Props) => {
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

  const xAxis = d3
    .axisBottom(xScale)
    .tickSizeOuter(0)
    .tickValues(xScale.domain().filter(d => !(+d % 1)))
    .tickFormat(d => `${d}%`);

  const xAxisGroup = bars
    .append('g')
    .call(xAxis)
    .attr('transform', `translate(0, ${innerHeight})`);

  xAxisGroup
    .append('text')
    .attr('x', innerWidth)
    .attr('y', 40)
    .attr('text-anchor', 'end')
    .classed('label', true)
    .text(formatMessage({ id: 'global.alcohol' }));

  const yAxis = d3
    .axisLeft(yScale)
    .ticks((d3.max(data, d => d.beverages) || 100) / 5)
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

  yAxisGroup
    .append('text')
    .attr('x', 0)
    .attr('y', 20)
    .attr('text-anchor', 'start')
    .classed('label', true)
    .text(formatMessage({ id: 'global.numberOfBeverages' }));

  bars
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', d => xScale(xValue(d)) || '')
    .attr('y', d => yScale(yValue(d)))
    .attr('width', xScale.bandwidth())
    .attr('height', d => innerHeight - yScale(yValue(d)));
};

export default createChart;
