import React from 'react';

import { Label, Producer, Editorial } from '.';

const Icon: React.FC<{ order: number }> = ({ order }) => {
  if (order === 1) {
    return <Label />;
  }

  if (order === 2) {
    return <Producer />;
  }

  return <Editorial />;
};

export default Icon;
