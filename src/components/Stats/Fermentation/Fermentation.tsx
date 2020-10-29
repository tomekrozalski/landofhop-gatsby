import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';

import { SectionHeader } from 'elements';
import { FermentationData, Sizes } from './types';
import {
  createChart,
  createLegend,
  normalizeData,
  setSVGAttributes,
} from './utils';
import './fermentation-chart.css';

const Fermentation: React.FC = () => {
  const intl = useIntl();
  const svg = useRef<SVGSVGElement>(null!);

  const rawData = useStaticQuery(graphql`
    query FermentationStats {
      allBeverage {
        edges {
          node {
            added
            fermentation {
              editorial
              label
              producer
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

    const data: FermentationData[] = normalizeData(rawData);
    setSVGAttributes({ sizes, wrapper: svg.current });
    createChart({ data, intl, sizes, wrapper: svg.current });
    createLegend({ data, intl, sizes, wrapper: svg.current });
  }, []);

  return (
    <>
      <SectionHeader>
        <FormattedMessage id="stats.fermentation.name" />
      </SectionHeader>
      <svg ref={svg} />
    </>
  );
};

export default Fermentation;
