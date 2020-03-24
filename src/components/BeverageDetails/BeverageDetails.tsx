import React, { useState } from 'react';
import { graphql } from 'gatsby';

import { Layout } from 'components';
import { BeverageBase as BeverageBaseTypes } from 'utils/types';
import { initialBeverageData, translateBeverage } from './utils/helpers';
import {
  Beverage as BeverageTypes,
  TranslatedBeverage as TranslatedBeverageTypes,
} from './utils/types';
import { BeverageDetailsContent } from '.';

type Props = {
  data: {
    beverage: BeverageTypes;
  };
  pageContext: {
    next: BeverageBaseTypes;
    previous: BeverageBaseTypes;
  };
};

// @Info: I could use Partial generic, but it would complicate displaying some components
export const BeverageContext = React.createContext<TranslatedBeverageTypes>(
  initialBeverageData,
);

const BeverageDetails: React.FC<Props> = ({ data, pageContext }) => {
  const [
    fetchedBeverage,
    setFetchedBeverage,
  ] = useState<TranslatedBeverageTypes | null>(null);

  return (
    <Layout>
      <BeverageContext.Provider
        value={fetchedBeverage || translateBeverage(data.beverage)}
      >
        <BeverageDetailsContent
          {...pageContext}
          setFetchedBeverage={setFetchedBeverage}
        />
      </BeverageContext.Provider>
    </Layout>
  );
};

export const query = graphql`
  query BeverageDetails(
    $badge: String!
    $brandBadge: String!
    $shortId: String!
  ) {
    beverage(
      badge: { eq: $badge }
      brand: { badge: { eq: $brandBadge } }
      shortId: { eq: $shortId }
    ) {
      ingredientsDescription {
        label {
          complete
          language
          value
        }
        producer {
          complete
          language
          value
        }
      }
      added
      aged {
        editorial {
          previousContent
          type
          time {
            unit
            value
          }
          wood
        }
        label {
          previousContent
          time {
            unit
            value
          }
          type
          wood
        }
        producer {
          previousContent
          time {
            unit
            value
          }
          type
          wood
        }
      }
      alcohol {
        editorial {
          scope
        }
        label {
          relate
          scope
          unit
          value
        }
        producer {
          relate
          scope
          unit
          value
        }
      }
      badge
      barcode
      bitterness {
        label
        producer
      }
      brand {
        badge
        consortium {
          language
          value
        }
        name {
          language
          value
        }
        shortId
        website
      }
      clarity {
        editorial
      }
      color {
        editorial
      }
      container {
        color
        hasCapWireFlip
        material
        type
        unit
        value
      }
      contract {
        editorial {
          badge
          consortium {
            language
            value
          }
          name {
            language
            value
          }
          shortId
          website
        }
        label {
          badge
          consortium {
            language
            value
          }
          name {
            language
            value
          }
          shortId
          website
        }
        producer {
          badge
          consortium {
            language
            value
          }
          name {
            value
            language
          }
          shortId
          website
        }
      }
      cooperation {
        editorial {
          badge
          consortium {
            language
            value
          }
          name {
            language
            value
          }
          shortId
          website
        }
        label {
          badge
          consortium {
            language
            value
          }
          name {
            language
            value
          }
          shortId
          website
        }
        producer {
          badge
          consortium {
            language
            value
          }
          name {
            language
            value
          }
          shortId
          website
        }
      }
      dryHopped {
        editorial {
          language
          value
        }
        label {
          language
          value
        }
        producer {
          language
          value
        }
      }
      expirationDate {
        label {
          unit
          value
        }
        producer {
          unit
          value
        }
      }
      extract {
        label {
          relate
          unit
          value
        }
        producer {
          relate
          value
          unit
        }
      }
      fermentation {
        editorial
        label
        producer
      }
      filtration {
        editorial
        label
        producer
      }
      fullness {
        label
        producer
      }
      hoppyness {
        label
        producer
      }
      id
      ingredientsList {
        label {
          name {
            language
            value
          }
          type
        }
        producer {
          name {
            value
            language
          }
          type
        }
      }
      isAged {
        editorial
        label
        producer
      }
      isDryHopped {
        editorial
        producer
        label
      }
      name {
        language
        value
      }
      notes
      pasteurization {
        editorial
        label
        producer
      }
      photos {
        cap
        gallery
        outlines {
          gallery
        }
      }
      place {
        editorial {
          city {
            language
            value
          }
          country {
            language
            value
          }
        }
        label {
          city {
            language
            value
          }
          country {
            language
            value
          }
        }
        producer {
          city {
            language
            value
          }
          country {
            language
            value
          }
        }
      }
      power {
        label
        producer
      }
      price {
        editorial {
          currency
          date
          value
        }
        label {
          currency
          date
          value
        }
        producer {
          currency
          date
          value
        }
      }
      series {
        label {
          language
          value
        }
        producer {
          language
          value
        }
      }
      shortId
      smokedMalt {
        label
        producer
      }
      style {
        editorial {
          language
          value
        }
        label {
          language
          value
        }
        producer {
          language
          value
        }
      }
      sweetness {
        label
        producer
      }
      tale {
        label {
          language
          value
        }
        producer {
          language
          value
        }
      }
      temperature {
        label {
          from
          to
          unit
        }
        producer {
          from
          to
          unit
        }
      }
      updated
    }
  }
`;

export default BeverageDetails;
