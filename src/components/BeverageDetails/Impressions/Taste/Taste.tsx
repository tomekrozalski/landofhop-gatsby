import React, { useContext } from 'react';

import { BeverageContext } from 'components/BeverageDetails';
import {
  Bitterness,
  Fullness,
  Sweetness,
  Power,
  Hoppyness,
  TasteWrapper,
} from '.';

const Taste = () => {
  const { bitterness, sweetness, fullness, power, hoppyness } = useContext(
    BeverageContext,
  );

  return bitterness || sweetness || fullness || power || hoppyness ? (
    <TasteWrapper>
      <Bitterness />
      <Sweetness />
      <Fullness />
      <Power />
      <Hoppyness />
    </TasteWrapper>
  ) : null;
};

export default Taste;
