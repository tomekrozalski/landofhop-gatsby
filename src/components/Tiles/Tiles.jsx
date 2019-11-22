import React from 'react';
import { arrayOf, shape } from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { breakpoints } from 'utils/theme';
import { beverageBasicsTypes, pageContextTypes } from 'utils/types';
import Layout from '../Layout';
import SEO from '../Seo';
import Tile from './Tile';
import Pagination from './Pagination';

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 160px);
  grid-gap: var(--size-tiles-gap);
  justify-content: center;
  max-width: var(--size-container-max-width);
  padding: 0 var(--size-tiles-gap);
  margin: 0 auto 8rem auto;

  @media (min-width: ${breakpoints.xl}) {
    grid-template-columns: repeat(auto-fill, 220px);
  }
`;

const Tiles = ({ data, pageContext }) => (
  <Layout>
    <SEO title="main" />
    <Grid>
      {data.allMongodbLandofhopBeverages.edges.map(({ node }) => (
        <Tile key={node.mongodb_id} {...node} />
      ))}
    </Grid>
    <Pagination {...pageContext} />
  </Layout>
);

Tiles.propTypes = {
  data: shape({
    allMongodbLandofhopBeverages: shape({
      edges: arrayOf(
        shape({
          node: shape(beverageBasicsTypes).isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired,
  }).isRequired,
  pageContext: shape(pageContextTypes).isRequired,
};

export const query = graphql`
  query BeveragesList($limit: Int!, $skip: Int!) {
    allMongodbLandofhopBeverages(
      limit: $limit
      skip: $skip
      sort: { fields: added, order: DESC }
    ) {
      edges {
        node {
          badge
          coverPhoto {
            childImageSharp {
              fluid(maxWidth: 220) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
            publicURL
          }
          label {
            general {
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
          shortId
        }
      }
    }
  }
`;

export default Tiles;
