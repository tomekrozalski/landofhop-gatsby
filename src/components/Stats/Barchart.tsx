import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

import './barchart.css';

type Props = {
  positionX: number;
  positionY: number;
  sizeX: number;
  sizeY: number;
};

type DataModel = {
  frequency: string;
  letter: string;
};

const Barchart: React.FC<Props> = ({ positionX, positionY, sizeX, sizeY }) => {
  const charRef = useRef<SVGGElement>(null!);

  useEffect(() => {
    const svg = d3.select(charRef.current);
    const margin = {
      top: 20,
      right: 20,
      bottom: 30,
      left: 40,
    };
    const width = +sizeX - margin.left - margin.right;
    const height = +sizeY - margin.top - margin.bottom;

    const axisX = d3
      .scaleBand()
      .rangeRound([0, width])
      .padding(0.1);
    const axisY = d3.scaleLinear().rangeRound([height, 0]);

    const g = svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    d3.tsv('https://swizec.github.io/dl/barchart.tsv').then(
      (data: DataModel[]) => {
        axisX.domain(data.map(d => d.letter));
        axisY.domain([0, d3.max(data, d => d.frequency)]);

        g.append('g')
          .attr('class', 'axis axis--x')
          .attr('transform', `translate(0,${height})`)
          .call(d3.axisBottom(axisX));

        g.append('g')
          .attr('class', 'axis axis--y')
          .call(d3.axisLeft(axisY).ticks(10, '%'))
          .append('text')
          .attr(
            'style',
            `
						fill: black;
						font-family: sans-serif;
						font-size: 10px;
					`,
          )
          .attr('transform', 'rotate(-90)')
          .attr('y', 6)
          .attr('dy', '0.71em')
          .attr('text-anchor', 'end')
          .text('Frequency');

        g.selectAll('.bar')
          .data(data)
          .enter()
          .append('rect')
          .attr('class', 'bar')
          .attr('x', d => axisX(d.letter))
          .attr('y', d => axisY(d.frequency))
          .attr('width', axisX.bandwidth())
          .attr('height', d => height - axisY(d.frequency));
      },
    );
  });

  return (
    <g ref={charRef} transform={`translate(${positionX}, ${positionY})`} />
  );
};

export default Barchart;
