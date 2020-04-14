import React, { useContext } from 'react';

import { BeverageContext } from 'components/BeverageDetails/utils/contexts';
import { AppearanceWrapper, Clarity, Color } from '.';

const Appearance = () => {
  const { clarity, color } = useContext(BeverageContext);

  return clarity || color ? (
    <AppearanceWrapper>
      <Color />
      <Clarity />
    </AppearanceWrapper>
  ) : null;
};

export default Appearance;
