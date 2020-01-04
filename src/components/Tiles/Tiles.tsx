import React from 'react';
import { graphql } from 'gatsby';

import {
  BeverageBasics as BeverageBasicsTypes,
  BeveragePageContext as BeveragePageContextTypes,
} from 'utils/types';
import { translateBeverageBasics } from 'utils/helpers';
import { Layout, SEO } from '../';
import { Grid } from './elements';
import { Pagination, Tile } from '.';

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
      {data.allBeverage.edges.map(({ node }) => (
        <Tile key={node.id} {...translateBeverageBasics(node)} />
      ))}
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
