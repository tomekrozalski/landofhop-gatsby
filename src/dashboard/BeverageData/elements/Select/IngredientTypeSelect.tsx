import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { FormName } from 'utils/enums';
import { IngredientType } from 'components/BeverageDetails/utils/enums';
import { Select } from './elements';

type Props = {
  form?: FormName;
  name: string;
  placeholder?: string;
};

const IngredientTypeSelect: React.FC<Props> = props => {
  const { formatMessage } = useIntl();
  const ingredient = Object.keys(IngredientType);

  return (
    <Select
      {...props}
      options={ingredient.map(value => ({
        label: formatMessage(
          { id: `global.ingredientType.${value}` },
          { value: 1 },
        ),
        value,
        type: value as IngredientType,
      }))}
    />
  );
};

export default IngredientTypeSelect;
