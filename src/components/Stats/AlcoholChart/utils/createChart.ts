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

  svg
    .attr('viewBox', `0 0 ${width} ${height}`)
    .classed('chart alcohol-chart', true);

  const xValue = (d: AlcoholData) => d.value.toString();
  const yValue = (d: AlcoholData) => d.beverages;

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
    .text(formatMessage({ id: 'global.alcohol' }));

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
    .text(formatMessage({ id: 'global.numberOfBeverages' }));

  const bars = chart.append('g').attr('data-attr', 'bars');

  const barGroups = bars
    .selectAll('g')
    .data(data.filter(({ beverages }) => beverages));

  const barGroupsEnter = barGroups.enter().append('g');

  barGroupsEnter
    .classed('bar-group', true)
    .attr(
      'transform',
      d => `translate(${xScale(xValue(d)) || ''}, ${innerHeight})`,
    )
    .transition()
    .duration(1000)
    .attr(
      'transform',
      d => `translate(${xScale(xValue(d)) || ''}, ${yScale(yValue(d))})`,
    );

  barGroupsEnter
    .append('rect')
    .classed('bar', true)
    .attr('width', xScale.bandwidth())
    .attr('height', 0)
    .transition()
    .duration(1000)
    .attr('height', d => innerHeight - yScale(yValue(d)));

  const label = barGroupsEnter.append('g').classed('label-group', true);
  label.attr('transform', 'translate(4, 0)');

  label
    .append('rect')
    .attr('width', 100)
    .attr('height', 30)
    .attr('fill', 'green');

  label
    .append('text')
    .text(d => {
      console.log('d', d);

      return 'bim bam';
    })
    .attr('transform', 'translate(4, 10)');
};

export default createChart;
