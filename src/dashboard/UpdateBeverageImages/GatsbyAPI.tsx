import React from 'react';
import { graphql } from 'gatsby';

import { BeverageBase as BeverageBaseTypes } from 'utils/types';
import { Beverage as BeverageTypes } from './utils/types';
import { UpdateBeverageImages } from '.';

type Props = {
  data: {
    beverage: BeverageTypes;
  };
  pageContext: {
    badge: string;
    brandBadge: string;
    next: BeverageBaseTypes;
    previous: BeverageBaseTypes;
    shortId: string;
  };
};

const GatsbyAPI: React.FC<Props> = props => <UpdateBeverageImages {...props} />;

export const query = graphql`
  query UpdateBeverageImages(
    $badge: String!
    $brandBadge: String!
    $shortId: String!
  ) {
    beverage(
      badge: { eq: $badge }
      brand: { badge: { eq: $brandBadge } }
      shortId: { eq: $shortId }
    ) {
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
        cap
        cover {
          height
          width
        }
        gallery
        outlines {
          cover
          gallery
        }
      }
      container {
        type
      }
    }
  }
`;

export default GatsbyAPI;
