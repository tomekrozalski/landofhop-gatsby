import * as d3 from 'd3';
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';

import { SiteLanguage } from 'utils/enums';
import { AddData, Sizes } from '../types';

type Props = {
  data: AddData[];
  intl: {
    formatMessage: ({ id }: { id: string }) => string;
    locale: SiteLanguage;
  };
  sizes: Sizes;
  wrapper: SVGSVGElement;
};

const createLegend = ({ data, intl, sizes, wrapper }: Props) => {
  const svg = d3.select(wrapper);

  const { height, margin, width } = sizes.legend;
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const legend = svg
    .append('g')
    .attr('data-attr', 'legend')
    .classed('legend', true)
    .attr(
      'transform',
      `translate(${margin.left}, ${sizes.chart.height + margin.top})`,
    );

  const legendGroups = legend
    .selectAll('g')
    .data(['total', 'bottles', 'cans'])
    .enter()
    .append('g')
    .attr('data-attr', name => name)
    .attr('transform', (_, i) => `translate(${(innerWidth / 4) * (i + 1)}, 0)`);

  legendGroups
    .append('rect')
    .attr('width', innerHeight)
    .attr('height', innerHeight)
    .attr('class', name => `line-path line-path--${name}`);

  legendGroups
    .append('rect')
    .attr('width', innerHeight)
    .attr('height', innerHeight)
    .attr('class', name => name);

  legendGroups
    .append('text')
    .attr('x', 50)
    .attr('y', innerHeight / 2)
    .attr('dominant-baseline', 'middle')
    .classed('label', true)
    .text(name => intl.formatMessage({ id: `stats.${name}` }));
};

export default createLegend;
