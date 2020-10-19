import * as d3 from 'd3';
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';
import { curry, sum } from 'lodash';

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

enum Types {
  total = 'total',
  bottles = 'bottles',
  cans = 'cans',
}

const createLegend = ({ data, intl, sizes, wrapper }: Props) => {
  const svg = d3.select(wrapper);

  const types = Object.values(Types);
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
    .data(types)
    .enter()
    .append('g')
    .attr('class', name => name);

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

  const legendWidth: any = types.reduce(
    (acc, curr) => ({
      ...acc,
      [curr]: 0,
    }),
    {},
  );

  function translateLabels() {
    d3.select('g.legend g.total').attr(
      'transform',
      `translate(${innerWidth -
        legendWidth.total -
        legendWidth.bottles -
        legendWidth.cans}, 0)`,
    );

    d3.select('g.legend g.bottles').attr(
      'transform',
      `translate(${innerWidth - legendWidth.total - legendWidth.bottles}, 0)`,
    );

    d3.select('g.legend g.cans').attr(
      'transform',
      `translate(${innerWidth - legendWidth.total}, 0)`,
    );
  }

  function getTextWidth(this: SVGTextElement, name: Types, i: number) {
    legendWidth[name] = this.getBBox().width + 70;
    if (i + 1 === types.length) {
      translateLabels();
    }
  }

  legendGroups
    .append('text')
    .attr('x', 50)
    .attr('y', innerHeight / 2)
    .attr('dominant-baseline', 'middle')
    .classed('label', true)
    .text(name => intl.formatMessage({ id: `stats.${name}` }))
    .each(getTextWidth);
};

export default createLegend;
