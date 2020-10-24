import * as d3 from 'd3';

import { Sizes } from '../types';

type Props = {
  sizes: Sizes;
  wrapper: SVGSVGElement;
};

const setSVGAttributes = ({ sizes, wrapper }: Props) => {
  const svg = d3.select(wrapper);

  svg
    .attr('viewBox', `0 0 ${sizes.width} ${sizes.height}`)
    .classed('chart top-brands-chart', true);
};

export default setSVGAttributes;
