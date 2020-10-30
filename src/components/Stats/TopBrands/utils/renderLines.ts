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
  const lineGenerator = (type: any) => {
    console.log('type', type);

    return d3
      .line<TopBrandsData>()
      .x(d => xScale(xValue(d)) || 0)
      .y(d => yScale(type(d)))
      .curve(d3.curveBasis);
  };

  console.log('renderLines values', values);

  // if (create) {

  selection
    .append('path')
    .datum<any>(values)
    .attr(
      'd',
      lineGenerator((d: TopBrandsData) => {
        console.log('d', d);
        return d.brands.find(({ id }) => id === '5cd71cda9f37434eb28b03ee')!
          .amount;
      }),
    )
    .attr('transform', `translate(${xScale.bandwidth() / 2}, 0)`)
    .classed('line-path', true);

  // } else {
  //   selection
  //     .selectAll('.line-path--top')
  //     .datum<any>(values)
  //     .transition()
  //     .duration(500)
  //     .ease(d3.easeQuadOut)
  //     .attr('d', lineGenerator(top));

  //   selection
  //     .selectAll('.line-path--bottom')
  //     .datum<any>(values)
  //     .transition()
  //     .duration(500)
  //     .ease(d3.easeQuadOut)
  //     .attr('d', lineGenerator(bottom));

  //   selection
  //     .selectAll('.line-path--spontaneous')
  //     .datum<any>(values)
  //     .transition()
  //     .duration(500)
  //     .ease(d3.easeQuadOut)
  //     .attr('d', lineGenerator(spontaneous));
  // }
};

export default renderLines;
