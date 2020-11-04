import React from 'react';
import { graphql } from 'gatsby';

// import { BeverageBase as BeverageBaseTypes } from 'utils/types';
// import { Beverage as BeverageTypes } from './utils/types';
import Ingredients from './Ingredients';

type Props = {
  data: {
    allBeverage: any;
  };
};

const GatsbyAPI: React.FC<Props> = props => <Ingredients {...props} />;

export const query = graphql`
  query BeveragesIngredients {
    allBeverage {
      edges {
        node {
          brand {
            name {
              language
              value
            }
            badge
            shortId
          }
          badge
          name {
            language
            value
          }
          ingredientsList {
            label {
              id
            }
            producer {
              id
            }
          }
        }
      }
    }
  }
`;

export default GatsbyAPI;
