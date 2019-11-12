import React from 'react';
import { arrayOf, shape } from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { beverageBasicsTypes } from 'utils/types';
import Layout from '../Layout';
import Tile from './Tile';

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 160px);
  grid-gap: var(--size-tiles-gap);
  justify-content: center;
  max-width: var(--size-container-max-width);
  padding: 0 var(--size-tiles-gap);
  margin: 0 auto 8rem auto;

  @media (min-width: $breakpoint-xl) {
    grid-template-columns: repeat(auto-fill, 220px);
  }
`;

const Tiles = ({ data }) => {
  console.log('data', data);

  return (
    <Layout>
      <Grid>
        {data.allMongodbLandofhopBeverages.edges.map(({ node }) => (
          <Tile key={node.mongodb_id} {...node} />
        ))}
      </Grid>
    </Layout>
  );
};

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
          editorial {
            photos {
              cover {
                height
                width
              }
            }
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
            }
          }
          mongodb_id
          shortId
        }
      }
    }
  }
`;

export default Tiles;
