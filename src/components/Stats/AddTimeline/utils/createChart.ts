import * as d3 from 'd3';
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';

import { SiteLanguage } from 'utils/enums';
import { renderTimelineAxis } from '../../utils';
import { AddData, Sizes } from '../types';

type Props = {
  data: AddData[];
  intl: {
    formatMessage: ({ id }: { id: string }, values?: any) => string;
    locale: SiteLanguage;
  };
  sizes: Sizes;
  wrapper: SVGSVGElement;
};

type BarType = {
  bottle: number;
  can: number;
  date: string;
};

const createChart = ({ data, intl, sizes, wrapper }: Props) => {
  const svg = d3.select(wrapper);

  const { height, margin, width } = sizes.chart;
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // Define horizontal scale

  const xValue = (d: AddData) => d.date;

  const xScale = d3
    .scaleBand()
    .domain(data.map(xValue))
    .range([0, innerWidth])
    .padding(0.1);

  // Define vertical scale

  const bottles = (d: AddData) => d.bottle;
  const cans = (d: AddData) => d.can;
  const total = (d: AddData) => d.bottle + d.can;

  const yScale = d3
    .scaleLinear()
    .domain([0, (d3.max(data, total) || 0) + 3])
    .range([innerHeight, 0]);

  // Translate the chart and add axis

  const chart = svg
    .append('g')
    .attr('data-attr', 'chart')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

  renderTimelineAxis({
    chart,
    innerHeight,
    innerWidth,
    intl,
    values: data,
    xScale,
    yScale,
    yTicks: (d3.max(data, total) || 100) / 5,
  });

  // ----------------------------------------------------
  // behaviour on mouse cursor over lines

  function handleMouseOverLine(this: SVGPathElement | SVGTextElement) {
    const badge = this.classList[1];
    function isNotCurrent(this: any) {
      return !this.classList.contains(badge);
    }
    d3.selectAll('.time-chart .line-path').classed('fade-out', isNotCurrent);
    d3.selectAll('.time-chart .legend > g').classed('fade-out', isNotCurrent);
  }

  function handleMouseOutLine() {
    d3.selectAll('.time-chart .fade-out').classed('fade-out', false);
  }

  // ----------------------------------------------------
  // behaviour on mouse cursor over bars

  const handleMouseOverBar = ({ bottle, can, date }: BarType, i: number) => {
    chart.selectAll('.line-path').classed('fade-out', true);

    chart
      .append('text')
      .classed(`depiction depiction-${i}`, true)
      .attr('opacity', 0)
      .text(
        intl.formatMessage(
          { id: 'stats.addTimeline.depiction' },
          {
            bottle,
            can,
            date:
              intl.locale === SiteLanguage.pl
                ? format(new Date(date), 'LLLL yyyy', { locale: pl })
                : format(new Date(date), 'MMMM yyyy'),
          },
        ),
      )
      .each(function center(this: SVGTextElement) {
        d3.select(this).attr(
          'transform',
          `translate(${innerWidth / 2 - this.getBBox().width / 2}, 25)`,
        );
      })
      .transition()
      .duration(500)
      .attr('opacity', 1);
  };

  const handleMouseOutBar = () => {
    d3.selectAll('.time-chart .fade-out').classed('fade-out', false);

    d3.selectAll('text.depiction')
      .transition()
      .duration(500)
      .attr('opacity', 0)
      .remove();
  };

  // ----------------------------------------------------
  // Add hidden lines

  const lines = chart.append('g').attr('data-attr', 'lines');

  const lineGenerator = (type: any) =>
    d3
      .line<AddData>()
      .x(d => xScale(xValue(d)) || 0)
      .y(d => yScale(type(d)))
      .curve(d3.curveBasis);

  function getTotalLength(this: SVGPathElement) {
    return this.getTotalLength();
  }

  [cans, bottles, total].forEach(type => {
    lines
      .append('path')
      .datum<any>(data)
      .classed(`line-path ${type.name}`, true)
      .attr('d', lineGenerator(type))
      .attr('transform', `translate(${xScale.bandwidth() / 2}, 0)`)
      .attr('stroke-dashoffset', getTotalLength)
      .attr('stroke-dasharray', getTotalLength)
      .on('mouseover', handleMouseOverLine)
      .on('mouseout', handleMouseOutLine);
  });

  // ----------------------------------------------------
  // Add hidden bars

  const bars = chart.append('g').attr('data-attr', 'bars');
  const barGroups = bars.selectAll('g').data(
    data.map(
      ({ date }) => ({
        date,
        bottle: 0,
        can: 0,
      }),
      d => d.date,
    ),
  );
  const barGroupsEnter = barGroups.enter().append('g');

  const barGroupsEnterElements = barGroupsEnter
    .classed('bar-group', true)
    .attr(
      'transform',
      d => `translate(${xScale(xValue(d)) || ''}, ${yScale(total(d))})`,
    )
    .on('mouseover', handleMouseOverBar)
    .on('mouseout', handleMouseOutBar);

  const canBars = barGroupsEnter
    .append('rect')
    .classed('cans', true)
    .attr('width', xScale.bandwidth())
    .attr('height', d => innerHeight - yScale(cans(d)));

  const bottleBars = barGroupsEnter
    .append('rect')
    .classed('bottles', true)
    .attr('width', xScale.bandwidth())
    .attr('height', d => innerHeight - yScale(bottles(d)))
    .attr('y', d => innerHeight - yScale(cans(d)));

  const reveal = () => {
    const duration = 3500;
    const time = duration / data.length;

    [cans, bottles, total].forEach(type => {
      lines
        .select(`.line-path.${type.name}`)
        .transition()
        .duration(duration)
        .delay(1000)
        .ease(d3.easeSin)
        .attr('stroke-dashoffset', 0);
    });

    data.forEach((_, index) => {
      setTimeout(() => {
        const updatedData = data.map((props, i) =>
          i <= index
            ? props
            : {
                date: props.date,
                bottle: 0,
                can: 0,
              },
        );

        barGroupsEnterElements
          .data(updatedData, d => d.date)
          .transition()
          .duration(1500)
          .ease(d3.easeQuadOut)
          .attr(
            'transform',
            d => `translate(${xScale(xValue(d)) || ''}, ${yScale(total(d))})`,
          );

        canBars
          .data(updatedData, d => d.date)
          .transition()
          .duration(1500)
          .ease(d3.easeQuadOut)
          .attr('height', d => {
            return innerHeight - yScale(cans(d));
          });

        bottleBars
          .data(updatedData, d => d.date)
          .transition()
          .duration(1500)
          .ease(d3.easeQuadOut)
          .attr('height', d => innerHeight - yScale(bottles(d)))
          .attr('y', d => innerHeight - yScale(cans(d)));
      }, (index + 1) * time);
    });
  };

  const io = new IntersectionObserver(
    ([entry], observer) => {
      if (entry.isIntersecting) {
        reveal();
        observer.disconnect();
      }
    },
    {
      threshold: 0.8,
    },
  );

  io.observe(wrapper);
};

export default createChart;
