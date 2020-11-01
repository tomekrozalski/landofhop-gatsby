import * as d3 from 'd3';
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';

import { SiteLanguage } from 'utils/enums';
import { AddData } from '../types';

type Props = {
  bottles: (d: AddData) => number;
  cans: (d: AddData) => number;
  chart: d3.Selection<SVGGElement, unknown, null, undefined>;
  create: boolean;
  innerHeight: number;
  innerWidth: number;
  intl: {
    formatMessage: ({ id }: { id: string }, values?: any) => string;
    locale: SiteLanguage;
  };
  lines: d3.Selection<SVGGElement, unknown, null, undefined>;
  selection: d3.Selection<SVGGElement, unknown, null, undefined>;
  total: (d: AddData) => number;
  transitionTime: number;
  values: AddData[];
  xScale: d3.ScaleBand<string>;
  xValue: (d: AddData) => string;
  yScale: d3.ScaleLinear<number, number>;
};

type BarType = {
  bottle: number;
  can: number;
  date: string;
};

const renderBars = ({
  bottles,
  cans,
  chart,
  create,
  innerHeight,
  innerWidth,
  intl,
  lines,
  selection,
  total,
  transitionTime,
  values,
  xScale,
  xValue,
  yScale,
}: Props) => {
  const handleMouseOver = ({ bottle, can, date }: BarType, i: number) => {
    // lines
    //   .transition()
    //   .duration(transitionTime)
    //   .attr('opacity', 0.1);
    // chart
    //   .append('text')
    //   .classed(`depiction depiction-${i}`, true)
    //   .attr('opacity', 0)
    //   .text(
    //     intl.formatMessage(
    //       { id: 'stats.addTimeline.depiction' },
    //       {
    //         bottle,
    //         can,
    //         date:
    //           intl.locale === SiteLanguage.pl
    //             ? format(new Date(date), 'LLLL yyyy', { locale: pl })
    //             : format(new Date(date), 'MMMM yyyy'),
    //       },
    //     ),
    //   )
    //   .each(function center(this: SVGTextElement) {
    //     d3.select(this).attr(
    //       'transform',
    //       `translate(${innerWidth / 2 - this.getBBox().width / 2}, 25)`,
    //     );
    //   })
    //   .transition()
    //   .duration(transitionTime)
    //   .attr('opacity', 1);
  };

  const handleMouseOut = () => {
    // lines
    //   .transition()
    //   .duration(transitionTime)
    //   .attr('opacity', 1);
    // d3.selectAll('text.depiction')
    //   .transition()
    //   .duration(transitionTime)
    //   .attr('opacity', 0)
    //   .remove();
  };

  const barGroups = selection.selectAll('g').data(values);
  const barGroupsEnter = barGroups.enter().append('g');

  if (create) {
    barGroupsEnter
      .classed('bar-group', true)
      .on('mouseover', handleMouseOver)
      .on('mouseout', handleMouseOut)
      .attr(
        'transform',
        d => `translate(${xScale(xValue(d)) || ''}, ${yScale(total(d))})`,
      );

    barGroupsEnter
      .append('rect')
      .classed('cans', true)
      .attr('width', xScale.bandwidth())
      .attr('height', d => innerHeight - yScale(cans(d)));

    barGroupsEnter
      .append('rect')
      .classed('bottles', true)
      .attr('width', xScale.bandwidth())
      .attr('height', d => innerHeight - yScale(bottles(d)))
      .attr('y', d => innerHeight - yScale(cans(d)));
  } else {
    barGroups
      .selectAll('.bar-group')
      .data(values, d => d.date)
      .transition()
      .duration(transitionTime)
      .ease(d3.easeQuadOut)
      .attr(
        'transform',
        d => `translate(${xScale(xValue(d)) || ''}, ${yScale(total(d))})`,
      );

    barGroups
      .selectAll('rect.cans')
      .data(values, d => d.date)
      .transition()
      .duration(transitionTime)
      .ease(d3.easeQuadOut)
      .attr('height', d => {
        console.log('cans update');

        return innerHeight - yScale(cans(d));
      });

    barGroups
      .selectAll('rect.bottles')
      .data(values, d => d.date)
      .transition()
      .duration(transitionTime)
      .ease(d3.easeQuadOut)
      .attr('height', d => innerHeight - yScale(bottles(d)))
      .attr('y', d => innerHeight - yScale(cans(d)));
  }
};

export default renderBars;
