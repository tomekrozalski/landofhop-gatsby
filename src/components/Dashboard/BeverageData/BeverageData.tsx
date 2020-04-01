import React, { useState } from 'react';

import { Layout, SEO } from 'components';
import { initialBeverageData } from 'components/BeverageDetails/utils/helpers';
import { Content } from '.';

// @Info: I could use Partial generic, but it would complicate displaying some components
export const BeverageContext = React.createContext<TranslatedBeverageTypes>(
  initialBeverageData,
);

type Props = {
  location: {
    state: {
      badge?: string;
      brand?: string;
      shortId?: string;
    } | null;
  };
};

const BeverageData: React.FC<Props> = props => {
  const [
    fetchedBeverage,
    setFetchedBeverage,
  ] = useState<TranslatedBeverageTypes | null>(null);

  return (
    <Layout>
      <SEO title="updateBeverage" />
      <BeverageContext.Provider value={fetchedBeverage}>
        <Content {...props} setFetchedBeverage={setFetchedBeverage} />
      </BeverageContext.Provider>
    </Layout>
  );
};

export default BeverageData;
