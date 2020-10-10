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

  const createItem = ({ name, shift }: { name: string; shift: number }) => {
    const item = legend
      .append('g')
      .attr('data-attr', name)
      .attr('transform', `translate(${shift}, 0)`);

    item
      .append('rect')
      .attr('width', innerHeight)
      .attr('height', innerHeight)
      .classed(`line-path line-path--${name}`, true);

    item
      .append('rect')
      .attr('width', innerHeight)
      .attr('height', innerHeight)
      .classed(name, true);

    item
      .append('text')
      .attr('x', 50)
      .attr('y', innerHeight / 2)
      .attr('dominant-baseline', 'middle')
      .classed('label', true)
      .text(intl.formatMessage({ id: `stats.${name}` }));
  };

  createItem({ name: 'total', shift: innerWidth / 4 });
  createItem({ name: 'bottles', shift: (innerWidth / 4) * 2 });
  createItem({ name: 'cans', shift: (innerWidth / 4) * 3 });
};

export default createLegend;
