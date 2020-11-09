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
  setEditIngredientData: (value: Ingredient) => void;
  type: IngredientType;
};

const IngredientsList: React.FC<Props> = ({
  beverages,
  ingredients,
  setEditIngredientData,
  type,
}) => {
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

  const List = ({ values }: { values: Ingredient[] }) => (
    <ul>
      {values.map(props => (
        <li key={props.id}>
          {getValueByLanguage(props.name, locale).value}{' '}
          <Counted>
            <FormattedMessage
              id="ingredients.counted"
              values={{ amount: getCount(props.id) }}
            />
          </Counted>
          {isLoggedIn && (
            <EditButton onClick={() => setEditIngredientData(props)} />
          )}
          <List
            values={sortedIngredients.filter(
              ({ parent }) => parent?.id === props.id,
            )}
          />
        </li>
      ))}
    </ul>
  );

  return (
    <Wrapper>
      <List values={sortedIngredients.filter(({ parent }) => !parent)} />
    </Wrapper>
  );
};

export default IngredientsList;
