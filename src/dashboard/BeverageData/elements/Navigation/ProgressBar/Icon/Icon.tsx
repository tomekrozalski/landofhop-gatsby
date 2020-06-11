import React from 'react';

import { Label, Producer, Editorial } from '.';

const Icon: React.FC<{ order: number }> = ({ order }) => {
  switch (order) {
    case 1:
      return <Label />;
    case 2:
      return <Producer />;
    case 3:
      return <Editorial />;
    default:
      return null;
  }
};

export default Icon;
