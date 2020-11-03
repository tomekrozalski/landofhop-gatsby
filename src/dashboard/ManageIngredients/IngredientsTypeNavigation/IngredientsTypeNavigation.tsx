import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { IngredientType } from 'components/BeverageDetails/utils/enums';
import List from './List';
import Item from './Item';
import Button from './Button';

type Props = {
  type: IngredientType;
  setType: (type: IngredientType) => void;
};

const IngredientsTypeNavigation: React.FC<Props> = ({ setType, type }) => (
  <nav>
    <List>
      {Object.values(IngredientType).map(value => (
        <Item>
          <Button
            onClick={() => setType(value)}
            className={type === value ? `${value} selected` : value}
          >
            <FormattedMessage
              id={`global.ingredientType.${value}`}
              values={{ value: 2 }}
            />
          </Button>
        </Item>
      ))}
    </List>
  </nav>
);

export default IngredientsTypeNavigation;
