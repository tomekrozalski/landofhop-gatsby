import React, { useState } from 'react';
import { graphql } from 'gatsby';

import { Layout, SEO } from 'components';
import { BeverageBase as BeverageBaseTypes } from 'utils/types';
import {
  Beverage as BeverageTypes,
  TranslatedBeverage as TranslatedBeverageTypes,
} from './utils/types';
import { initialBeverageData, translateBeverage } from './utils/helpers';
import { UpdateContent } from '.';

// @Info: I could use Partial generic, but it would complicate displaying some components
export const BeverageContext = React.createContext<TranslatedBeverageTypes>(
  initialBeverageData,
);

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

const UpdateBeverageImages: React.FC<Props> = ({ data, pageContext }) => {
  const [fetchedBeverage, setFetchedBeverage] = useState(null);

  return (
    <Layout>
      <SEO title="updateBeverageImages" />
      <BeverageContext.Provider
        value={fetchedBeverage || translateBeverage(data.beverage)}
      >
        <UpdateContent
          next={pageContext.next}
          previous={pageContext.previous}
          setFetchedBeverage={setFetchedBeverage}
        />
      </BeverageContext.Provider>
    </Layout>
  );
};

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

export default UpdateBeverageImages;
