import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';

import { SectionHeader } from 'elements';
import { AddData } from './types';
import { createChart, normalizeData } from './utils';
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
    const data: AddData[] = normalizeData(rawData);
    createChart({ data, intl, wrapper: svg.current });
  }, []);

  return (
    <>
      <SectionHeader>
        <FormattedMessage id="stats.addTimeline.name" />
      </SectionHeader>
      <svg ref={svg} />
    </>
  );
};

export default AddTimeline;
