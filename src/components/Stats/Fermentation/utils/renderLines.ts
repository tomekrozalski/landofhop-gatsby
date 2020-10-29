import * as d3 from 'd3';

import { FermentationData } from '../types';

type Props = {
  bottom: (d: FermentationData) => number;
  create: boolean;
  selection: d3.Selection<SVGGElement, unknown, null, undefined>;
  spontaneous: (d: FermentationData) => number;
  top: (d: FermentationData) => number;
  values: FermentationData[];
  xScale: d3.ScaleBand<string>;
  xValue: (d: FermentationData) => string;
  yScale: d3.ScaleLinear<number, number>;
};

const renderLines = ({
  bottom,
  create,
  selection,
  spontaneous,
  top,
  values,
  xScale,
  xValue,
  yScale,
}: Props) => {
  const lineGenerator = (type: any) =>
    d3
      .line<FermentationData>()
      .x(d => xScale(xValue(d)) || 0)
      .y(d => yScale(type(d)))
      .curve(d3.curveStepBefore);

  if (create) {
    selection
      .append('path')
      .datum<any>(values)
      .attr('d', lineGenerator(top))
      .attr('transform', `translate(${xScale.bandwidth() / 2}, 0)`)
      .classed('line-path line-path--top', true);

    selection
      .append('path')
      .datum<any>(values)
      .attr('d', lineGenerator(bottom))
      .attr('transform', `translate(${xScale.bandwidth() / 2}, 0)`)
      .classed('line-path line-path--bottom', true);

    selection
      .append('path')
      .datum<any>(values)
      .attr('d', lineGenerator(spontaneous))
      .attr('transform', `translate(${xScale.bandwidth() / 2}, 0)`)
      .classed('line-path line-path--spontaneous', true);
  } else {
    selection
      .selectAll('.line-path--top')
      .datum<any>(values)
      .transition()
      .duration(500)
      .ease(d3.easeQuadOut)
      .attr('d', lineGenerator(top));

    selection
      .selectAll('.line-path--bottom')
      .datum<any>(values)
      .transition()
      .duration(500)
      .ease(d3.easeQuadOut)
      .attr('d', lineGenerator(bottom));

    selection
      .selectAll('.line-path--spontaneous')
      .datum<any>(values)
      .transition()
      .duration(500)
      .ease(d3.easeQuadOut)
      .attr('d', lineGenerator(spontaneous));
  }
};

export default renderLines;
