import React, { useContext } from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { getValueByLanguage } from 'utils/helpers';
import { IngredientType } from 'components/BeverageDetails/utils/enums';
import { IngredientContext } from 'dashboard/utils/contexts';
import Wrapper from './Wrapper';

type Props = {
  type: IngredientType;
};

const IngredientsList: React.FC<Props> = ({ type }) => {
  const { values } = useContext(IngredientContext);
  const { locale } = useIntl();

  return (
    <Wrapper>
      {values
        .filter(({ type: itemType }) => itemType === type)
        .sort((a, b) =>
          getValueByLanguage(a.name, locale).value <
          getValueByLanguage(b.name, locale).value
            ? -1
            : 1,
        )
        .map(({ id, name }) => (
          <li key={id}>{getValueByLanguage(name, locale).value}</li>
        ))}
    </Wrapper>
  );
};

export default IngredientsList;
