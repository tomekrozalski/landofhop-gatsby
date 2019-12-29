import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { breakpoints } from 'utils/theme';
import BeverageBasicsType from 'utils/types/BeverageBasics.type';
import PageContextType from 'utils/types/PageContext.type';
import Layout from '../Layout';
import SEO from '../Seo';
import Tile from './Tile';
import Pagination from './Pagination';

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 160px);
  grid-gap: var(--size-tiles-gap);
  justify-content: center;
  align-items: flex-end;
  max-width: var(--size-container-max-width);
  padding: 2rem var(--size-tiles-gap);
  margin: 0 auto 6rem auto;

  @media (min-width: ${breakpoints.xl}) {
    grid-template-columns: repeat(auto-fill, 220px);
  }
`;

type Props = {
  data: {
    allBeverage: {
      edges: {
        node: BeverageBasicsType
      }[],
    }
  }
  pageContext: PageContextType
}

const Tiles: React.FC<Props> = ({ data, pageContext }) => (
  <Layout>
    <SEO title="main" />
    <Grid>
      {data.allBeverage.edges.map(({ node }) => (
        <Tile key={node.id} {...node} />
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
          coverPhoto {
            childImageSharp {
              fluid(maxWidth: 220) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
            publicURL
          }
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
        }
      }
    }
  }
`;

export default Tiles;
