import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';

import { SectionHeader } from 'elements';
import { AddData, Sizes } from './types';
import {
  createChart,
  createLegend,
  normalizeData,
  setSVGAttributes,
} from './utils';
import './time-chart.css';

const AddTimeline: React.FC = () => {
  const intl = useIntl();
  const svg = useRef<SVGSVGElement>(null!);

  const rawData = useStaticQuery(graphql`
    query AddStats {
      allBeverage {
        edges {
          node {
            added
            container {
              type
            }
          }
        }
      }
    }
  `);

  useEffect(() => {
    const sizes: Sizes = {
      chart: {
        width: 1160,
        height: 600,
        margin: {
          top: 40,
          right: 40,
          bottom: 40,
          left: 40,
        },
      },
      legend: {
        width: 1160,
        height: 70,
        margin: {
          top: 20,
          right: 40,
          bottom: 20,
          left: 40,
        },
      },
    };

    const data: AddData[] = normalizeData(rawData);
    setSVGAttributes({ sizes, wrapper: svg.current });
    createChart({ data, intl, sizes, wrapper: svg.current });
    createLegend({ data, intl, sizes, wrapper: svg.current });
  }, []);

  return (
    <>
      <SectionHeader>
        <FormattedMessage id="stats.addTimeline.name" />
      </SectionHeader>
      <div className="time-chart-wrapper">
        <svg ref={svg} />
      </div>
    </>
  );
};

export default AddTimeline;
