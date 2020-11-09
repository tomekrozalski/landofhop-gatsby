import React, { useState } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { useStaticQuery, graphql } from 'gatsby';

import { Header, Wrapper } from 'elements/textPage';
import { IngredientType } from 'components/BeverageDetails/utils/enums';
import { Layout, SEO } from '..';
import { Ingredient, RawData as RawDataType } from './utils/types';
import IngredientsList from './IngredientsList';
import IngredientsTypeNavigation from './IngredientsTypeNavigation';
import EditModal from './EditModal';

const Ingredients: React.FC = () => {
  const [
    editIngredientData,
    setEditIngredientData,
  ] = useState<Ingredient | null>(null);
  const [type, setType] = useState(IngredientType.malt);

  const rawData: RawDataType = useStaticQuery(graphql`
    query BeveragesWithIngredients {
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
      allIngredient {
        edges {
          node {
            badge
            id
            parent {
              id
            }
            type
            name {
              language
              value
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="ingredients" />
      <Wrapper>
        <Header>
          <FormattedMessage id="ingredients.name" />
        </Header>
        <IngredientsTypeNavigation type={type} setType={setType} />
        <IngredientsList
          beverages={rawData.allBeverage.edges.map(({ node }) => node)}
          ingredients={rawData.allIngredient.edges.map(({ node }) => node)}
          setEditIngredientData={setEditIngredientData}
          type={type}
        />
      </Wrapper>
      <EditModal
        close={() => setEditIngredientData(null)}
        editIngredientData={editIngredientData}
      />
    </Layout>
  );
};

export default Ingredients;
