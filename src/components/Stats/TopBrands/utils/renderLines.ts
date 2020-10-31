import * as d3 from 'd3';

import { TopBrandsData } from '../types';

type Props = {
  create: boolean;
  selection: d3.Selection<SVGGElement, unknown, null, undefined>;
  values: TopBrandsData[];
  xScale: d3.ScaleBand<string>;
  xValue: (d: TopBrandsData) => string;
  yScale: d3.ScaleLinear<number, number>;
};

const renderLines = ({
  create,
  selection,
  values,
  xScale,
  xValue,
  yScale,
}: Props) => {
  const lineGenerator = (value: string) =>
    d3
      .line<TopBrandsData>()
      .x(d => xScale(xValue(d)) || 0)
      .y(d => yScale(d.brands.find(({ id }) => id === value)!.amount))
      .curve(d3.curveBasis);

  if (create) {
    values[0].brands.forEach(({ id }) => {
      selection
        .append('path')
        .datum<any>(values)
        .classed('line-path', true)
        .attr('d', lineGenerator(id))
        .attr('transform', `translate(${xScale.bandwidth() / 2}, 0)`);
    });
  } else {
    values[0].brands.forEach(({ id }, i) => {
      const path = selection
        .selectAll(`.line-path:nth-child(${i + 1})`)
        .datum<any>(values)
        .transition()
        .duration(1500)
        .ease(d3.easeSin)
        .attr('d', lineGenerator(id));

      // const pathLength = path.node().getTotalLength();
      // path.attr('stroke-dashoffset', pathLength).attr('stroke-dasharray', pathLength);
      // console.log('pathLength', pathLength);
    });
  }
};

export default renderLines;
