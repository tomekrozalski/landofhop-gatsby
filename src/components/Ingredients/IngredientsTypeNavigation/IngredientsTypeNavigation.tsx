import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { IngredientType } from 'components/BeverageDetails/utils/enums';
import Wrapper from './Wrapper';

type Props = {
  type: IngredientType;
  setType: (type: IngredientType) => void;
};

const IngredientsTypeNavigation: React.FC<Props> = ({ setType, type }) => (
  <Wrapper>
    <ul>
      {Object.values(IngredientType).map(value => (
        <li key={value}>
          <button
            className={type === value ? `${value} selected` : value}
            onClick={() => setType(value)}
            type="button"
          >
            <FormattedMessage
              id={`global.ingredientType.${value}`}
              values={{ value: 2 }}
            />
          </button>
        </li>
      ))}
    </ul>
  </Wrapper>
);

export default IngredientsTypeNavigation;
