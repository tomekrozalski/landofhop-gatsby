import React, { useContext } from 'react';

import { AuthenticationContext } from 'utils/contexts';
import { Danger } from 'elements/icons';
import { removeBeverageCap } from './utils';
import { RemoveButton } from './elements';
import { BeverageContext } from '../UpdateBeverageImages';

type Props = {
  updateValues: () => void;
};

const RemoveCap: React.FC<Props> = ({ updateValues }) => {
  const { token } = useContext(AuthenticationContext);
  const { badge, brand, id, shortId } = useContext(BeverageContext);

  const remove = () => {
    removeBeverageCap({
      badge,
      brand: brand.badge,
      id,
      shortId,
      token,
    }).then(updateValues);
  };

  return (
    <RemoveButton onClick={remove}>
      <Danger />
    </RemoveButton>
  );
};

export default RemoveCap;
