import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { SectionHeader } from 'elements';
import { AlcoholData } from './types';
import {
  createChart,
  getMissingAlcoholBeverages,
  normalizeData,
} from './utils';

const AlcoholChart: React.FC = () => {
  const svg = useRef<SVGSVGElement>(null!);

  const rawData = useStaticQuery(graphql`
    query AlcoholStats {
      allBeverage {
        edges {
          node {
            alcohol {
              label {
                value
                unit
                relate
              }
              producer {
                relate
                unit
                value
              }
            }
          }
        }
      }
    }
  `);

  useEffect(() => {
    const data: AlcoholData[] = normalizeData(rawData);
    const missingAlcoholBeverages = getMissingAlcoholBeverages(rawData);

    if (missingAlcoholBeverages) {
      // eslint-disable-next-line no-console
      console.warn(
        'There are beverages without information about alcohol in database',
      );
    }

    createChart({ data, wrapper: svg.current });
  }, []);

  return (
    <>
      <SectionHeader>
        <FormattedMessage id="stats.alcohol.name" />
      </SectionHeader>
      <svg ref={svg} />
    </>
  );
};

export default AlcoholChart;
