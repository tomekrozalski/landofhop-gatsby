import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { breakpoints } from 'utils/theme';
import { Beverage as BeverageTypes } from 'utils/types';
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
        node: BeverageTypes
      }[],
    }
  }
  pageContext: {
    humanPageNumber: number
    intl: {
      language: string
    },
    limit: number
    nextPagePath: string
    numberOfPages: number
    pageNumber: number
    previousPagePath: string
    skip: number
  }
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
