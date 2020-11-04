import React, { useContext, useEffect, useState } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { Spinner } from 'elements';
import { Header, Wrapper } from 'elements/textPage';
import { Status as StatusEnum } from 'utils/enums';
import { IngredientContext } from 'dashboard/utils/contexts';
import { IngredientType } from 'components/BeverageDetails/utils/enums';
import { Layout, SEO } from '..';
import IngredientsList from './IngredientsList';
import IngredientsTypeNavigation from './IngredientsTypeNavigation';

type Props = {
  data: {
    allBeverage: {
      edges: { node: any }[];
    };
  };
};

const Ingredients: React.FC<Props> = props => {
  const { getIngredients, status } = useContext(IngredientContext);
  const [type, setType] = useState(IngredientType.malt);

  console.log('props', props);

  useEffect(getIngredients, []);

  return (
    <Layout>
      <SEO title="ingredients" />
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
    </Layout>
  );
};

export default Ingredients;
