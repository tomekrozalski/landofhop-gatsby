import React from 'react';

import { Refresh as RefreshIcon } from 'elements/icons';
import { Button } from '.';

const RefreshButton: React.FC = () => {
  const refresh = () =>
    fetch(`${process.env.GATSBY}/__refresh`, {
      method: 'POST',
    });

  return (
    <Button onClick={refresh} largeIcon>
      <RefreshIcon />
    </Button>
  );
};

export default RefreshButton;
