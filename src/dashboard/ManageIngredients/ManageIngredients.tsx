import React, { useContext, useEffect, useState } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { Spinner } from 'elements';
import { Header, Wrapper } from 'elements/textPage';
import { Status as StatusEnum } from 'utils/enums';
import { IngredientContext } from 'dashboard/utils/contexts';
import { IngredientType } from 'components/BeverageDetails/utils/enums';
import IngredientsList from './IngredientsList';
import IngredientsTypeNavigation from './IngredientsTypeNavigation';

const ManageIngredients: React.FC = () => {
  const { getIngredients, status } = useContext(IngredientContext);
  const [type, setType] = useState(IngredientType.malt);

  useEffect(getIngredients, []);

  return (
    <Wrapper>
      <Header>
        <FormattedMessage id="dashboard.manageIngredients.name" />
      </Header>
      <IngredientsTypeNavigation type={type} setType={setType} />
      {status !== StatusEnum.fulfilled ? (
        <Spinner />
      ) : (
        <IngredientsList type={type} />
      )}
    </Wrapper>
  );
};

export default ManageIngredients;
