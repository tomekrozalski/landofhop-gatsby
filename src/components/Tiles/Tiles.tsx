import React from 'react';
import { graphql } from 'gatsby';

import {
  Beverage as BeverageTypes,
  PageContext as PageContextTypes,
} from './utils/types';
import { Layout, SEO } from '../';
import { Grid } from './elements';
import { Pagination, TileMap } from '.';

type Props = {
  data: {
    allBeverage: {
      edges: { node: BeverageTypes }[];
    };
  };
  pageContext: PageContextTypes;
};

const Tiles: React.FC<Props> = ({ data, pageContext }) => (
  <Layout>
    <SEO title="main" values={{ page: pageContext.humanPageNumber }} />
    <Grid>
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
          photos {
            cover {
              height
              width
            }
            outlines {
              cover
            }
          }
          container {
            type
          }
        }
      }
    }
  }
`;

export default Tiles;
