import React from 'react';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';

import { getValueByLanguage } from 'utils/helpers';
import { IngredientType } from 'components/BeverageDetails/utils/enums';
import { Beverage, Ingredient } from '../utils/types';
import Wrapper from './Wrapper';

type Props = {
  beverages: Beverage[];
  ingredients: Ingredient[];
  type: IngredientType;
};

const IngredientsList: React.FC<Props> = ({ beverages, ingredients, type }) => {
  const { locale } = useIntl();

  const getCount = (value: string) =>
    beverages.filter(
      ({ ingredientsList }) =>
        ingredientsList?.label?.find(({ id }) => id === value) ||
        ingredientsList?.producer?.find(({ id }) => id === value),
    ).length;

  console.log('beverages', beverages, ingredients);

  return (
    <Wrapper>
      {ingredients
        .filter(({ type: itemType }) => itemType === type)
        .sort((a, b) =>
          getValueByLanguage(a.name, locale).value <
          getValueByLanguage(b.name, locale).value
            ? -1
            : 1,
        )
        .map(({ id, name }) => (
          <li key={id}>
            {getValueByLanguage(name, locale).value}{' '}
            <span>
              <FormattedMessage
                id="ingredients.counted"
                values={{ amount: getCount(id) }}
              />
            </span>
          </li>
        ))}
    </Wrapper>
  );
};

export default IngredientsList;
