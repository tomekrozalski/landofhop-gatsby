import React from 'react';
import { graphql } from 'gatsby';

import Layout from './Layout';

const List = ({ data }) => {
  console.log('data', data);

  return (
    <Layout>
      {data.allMongodbLandofhopBeverages.edges.map(({ node }) => (
        <div>{node.badge}</div>
      ))}
    </Layout>
  );
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
          label {
            general {
              brand {
                name {
                  value
                  language
                }
                badge
              }
            }
          }
          shortId
          editorial {
            photos {
              cover {
                height
                width
              }
            }
          }
        }
      }
    }
  }
`;

export default List;
