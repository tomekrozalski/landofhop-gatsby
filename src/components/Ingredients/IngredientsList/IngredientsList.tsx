import React, { useContext, useMemo } from 'react';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';

import { AuthenticationContext } from 'utils/contexts';
import { getValueByLanguage } from 'utils/helpers';
import { IngredientType } from 'components/BeverageDetails/utils/enums';
import { Beverage, Ingredient } from '../utils/types';
import { Counted, EditButton, Wrapper } from './elements';

type Props = {
  beverages: Beverage[];
  ingredients: Ingredient[];
  type: IngredientType;
};

const IngredientsList: React.FC<Props> = ({ beverages, ingredients, type }) => {
  const { locale } = useIntl();
  const { isLoggedIn } = useContext(AuthenticationContext);

  const getCount = (value: string) =>
    beverages.filter(
      ({ ingredientsList }) =>
        ingredientsList?.label?.find(({ id }) => id === value) ||
        ingredientsList?.producer?.find(({ id }) => id === value),
    ).length;

  const sortedIngredients = useMemo(
    () =>
      ingredients
        .filter(({ type: itemType }) => itemType === type)
        .sort(({ name: a }, { name: b }) =>
          getValueByLanguage(a, locale).value <
          getValueByLanguage(b, locale).value
            ? -1
            : 1,
        ),
    [ingredients],
  );

  const getChildren = (value: string) => {
    const children = sortedIngredients.filter(
      ({ parent }) => parent?.id === value,
    );

    if (children.length) {
      return (
        <ul>
          {children.map(({ id, name }) => (
            <li key={id}>
              {getValueByLanguage(name, locale).value}{' '}
              <Counted>
                <FormattedMessage
                  id="ingredients.counted"
                  values={{ amount: getCount(id) }}
                />
              </Counted>
              {isLoggedIn && <EditButton />}
            </li>
          ))}
        </ul>
      );
    }

    return null;
  };

  return (
    <Wrapper>
      {sortedIngredients
        .filter(({ parent }) => !parent)
        .map(({ id, name }) => (
          <li key={id}>
            {getValueByLanguage(name, locale).value}{' '}
            <Counted>
              <FormattedMessage
                id="ingredients.counted"
                values={{ amount: getCount(id) }}
              />
            </Counted>
            {isLoggedIn && <EditButton />}
            {getChildren(id)}
          </li>
        ))}
    </Wrapper>
  );
};

export default IngredientsList;
