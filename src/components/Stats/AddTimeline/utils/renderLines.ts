import * as d3 from 'd3';

import { AddData } from '../types';

type Props = {
  bottles: (d: AddData) => number;
  cans: (d: AddData) => number;
  create: boolean;
  delay: number;
  selection: d3.Selection<SVGGElement, unknown, null, undefined>;
  total: (d: AddData) => number;
  values: AddData[];
  xScale: d3.ScaleBand<string>;
  xValue: (d: AddData) => string;
  yScale: d3.ScaleLinear<number, number>;
};

const renderLines = ({
  bottles,
  cans,
  create,
  delay,
  selection,
  total,
  values,
  xScale,
  xValue,
  yScale,
}: Props) => {
  const lineGenerator = (type: any) =>
    d3
      .line<AddData>()
      .x(d => xScale(xValue(d)) || 0)
      .y(d => yScale(type(d)))
      .curve(d3.curveBasis);

  if (create) {
    selection
      .append('path')
      .datum<any>(values)
      .attr('d', lineGenerator(cans))
      .attr('transform', `translate(${xScale.bandwidth() / 2}, 0)`)
      .classed('line-path line-path--cans', true);

    selection
      .append('path')
      .datum<any>(values)
      .attr('d', lineGenerator(bottles))
      .attr('transform', `translate(${xScale.bandwidth() / 2}, 0)`)
      .classed('line-path line-path--bottles', true);

    selection
      .append('path')
      .datum<any>(values)
      .attr('d', lineGenerator(total))
      .attr('transform', `translate(${xScale.bandwidth() / 2}, 0)`)
      .classed('line-path line-path--total', true);
  } else {
    selection
      .selectAll('.line-path--cans')
      .datum<any>(values)
      .transition()
      .duration(delay)
      .attr('d', lineGenerator(cans));

    selection
      .selectAll('.line-path--bottles')
      .datum<any>(values)
      .transition()
      .duration(delay)
      .attr('d', lineGenerator(bottles));

    selection
      .selectAll('.line-path--total')
      .datum<any>(values)
      .transition()
      .duration(delay)
      .attr('d', lineGenerator(total));
  }
};

export default renderLines;
