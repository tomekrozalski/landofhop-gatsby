import * as d3 from 'd3';
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';

import { SiteLanguage } from 'utils/enums';
import { AddData } from '../AddTimeline/types';
import { FermentationData } from '../Fermentation/types';

type Props = {
  chart: d3.Selection<SVGGElement, unknown, null, undefined>;
  innerHeight: number;
  innerWidth: number;
  intl: {
    formatMessage: ({ id }: { id: string }, values?: any) => string;
    locale: SiteLanguage;
  };
  values: AddData[] | FermentationData[];
  xScale: d3.ScaleBand<string>;
  yScale: d3.ScaleLinear<number, number>;
  yTicks: number;
};

const renderTimelineAxis = ({
  chart,
  innerHeight,
  innerWidth,
  intl,
  values,
  xScale,
  yScale,
  yTicks,
}: Props) => {
  const monthAxis = d3
    .axisBottom(xScale)
    .tickSizeOuter(0)
    .ticks(values.length)
    .tickFormat((value: string) =>
      intl.locale === SiteLanguage.pl
        ? format(new Date(value), 'MMM', { locale: pl })
        : format(new Date(value), 'MMM'),
    );

  chart
    .append('g')
    .attr('data-attr', 'monthAxis')
    .call(monthAxis)
    .attr('transform', `translate(0, ${innerHeight})`);

  const yearAxis = d3
    .axisBottom(xScale)
    .tickSizeOuter(0)
    .ticks(values.length)
    .tickValues(
      xScale.domain().filter(d => {
        if (d === '2017-06') {
          return true;
        }

        const [, month] = d.split('-');
        return month === '01';
      }),
    )
    .tickFormat(d => `${format(new Date(d), 'yyyy')} →`);

  const yearAxisGroup = chart
    .append('g')
    .attr('data-attr', 'yearAxis')
    .call(yearAxis)
    .attr('transform', `translate(0, ${innerHeight + 20})`);

  yearAxisGroup.select('.domain').remove();
  yearAxisGroup.selectAll('.tick line').remove();
  yearAxisGroup.selectAll('.tick text').attr('text-anchor', 'start');

  const yAxis = d3
    .axisLeft(yScale)
    .ticks(yTicks)
    .tickSize(-innerWidth);

  const yAxisGroup = chart
    .append('g')
    .attr('data-attr', 'y-axis-group')
    .classed('y-axis-group', true)
    .call(yAxis);

  yAxisGroup.select('.domain').remove();

  yAxisGroup
    .selectAll('.tick')
    .select('text')
    .attr('dy', -5);
};

export default renderTimelineAxis;
