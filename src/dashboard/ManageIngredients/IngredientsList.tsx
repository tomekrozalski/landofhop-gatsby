import React, { useContext } from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { getValueByLanguage } from 'utils/helpers';
import { IngredientType } from 'components/BeverageDetails/utils/enums';
import { IngredientContext } from 'dashboard/utils/contexts';

type Props = {
  type: IngredientType;
};

const IngredientsList: React.FC<Props> = ({ type }) => {
  const { values } = useContext(IngredientContext);
  const { locale } = useIntl();

  return (
    <ul>
      {values
        .filter(({ type: itemType }) => itemType === type)
        .map(({ name }) => (
          <li>{getValueByLanguage(name, locale).value}</li>
        ))}
    </ul>
  );
};

export default IngredientsList;
