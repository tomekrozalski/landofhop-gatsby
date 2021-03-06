import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';

import { SectionHeader } from 'elements';
import { Sizes, TopBrandsData } from './types';
import { createChart, normalizeData, setSVGAttributes } from './utils';
import './top-brands-chart.css';

const TopBrands: React.FC = () => {
  const intl = useIntl();
  const svg = useRef<SVGSVGElement>(null!);

  const rawData = useStaticQuery(graphql`
    query TopBrands {
      allBeverage {
        edges {
          node {
            added
            brand {
              id
              badge
              name {
                language
                value
              }
            }
          }
        }
      }
    }
  `);

  useEffect(() => {
    const sizes: Sizes = {
      width: 1160,
      height: 600,
      margin: {
        top: 40,
        right: 140,
        bottom: 40,
        left: 40,
      },
    };

    const data: TopBrandsData[] = normalizeData({ values: rawData, limit: 10 });
    setSVGAttributes({ sizes, wrapper: svg.current });
    createChart({ data, intl, sizes, wrapper: svg.current });
  }, []);

  return (
    <>
      <SectionHeader>
        <FormattedMessage id="stats.topBrands.name" />
      </SectionHeader>
      <div className="top-brands-wrapper">
        <svg ref={svg} />
      </div>
    </>
  );
};

export default TopBrands;
