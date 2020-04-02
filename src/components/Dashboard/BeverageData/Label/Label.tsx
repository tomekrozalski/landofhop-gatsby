import React, { useContext } from 'react';

import { BeverageContext } from 'utils/contexts';

const Label: React.FC = () => {
  const { badge } = useContext(BeverageContext);

  return <div>Label, badge: {badge}</div>;
};

export default Label;
