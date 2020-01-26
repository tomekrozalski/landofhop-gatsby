import React from 'react';
import { graphql } from 'gatsby';

import {
  BeverageBasics as BeverageBasicsTypes,
  BeveragePageContext as BeveragePageContextTypes,
} from 'utils/types';
import { Layout, SEO } from '../';
import { Grid } from './elements';
import { Pagination, SearchResults, TileMap } from '.';

type Props = {
  data: {
    allBeverage: {
      edges: { node: BeverageBasicsTypes }[],
    }
  }
  pageContext: BeveragePageContextTypes
}

const Tiles: React.FC<Props> = ({ data, pageContext }) => (
  <Layout>
    <SEO title="main" values={{ page: pageContext.humanPageNumber }} />
    <Grid>
      <SearchResults />
      <TileMap edges={data.allBeverage.edges} />
    </Grid>
    <Pagination {...pageContext} />
  </Layout>
);

export const query = graphql`
  query BeveragesList($limit: Int!, $skip: Int!) {
    allBeverage(
      limit: $limit
      skip: $skip
      sort: { fields: added, order: DESC }
    ) {
      edges {
        node {
          id
          shortId
          badge
          brand {
            badge
            name {
              value
              language
            }
          }
          name {
            value
            language
          }
          coverPhoto {
            childImageSharp {
              fluid(maxWidth: 220) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
            publicURL
          }
        }
      }
    }
  }
`;

export default Tiles;
