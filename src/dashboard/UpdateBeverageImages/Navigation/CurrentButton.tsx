import React from 'react';
import { Link } from 'gatsby-plugin-intl';

import { BeverageBase as BeverageBaseTypes } from 'utils/types';
import { Button, Dot } from '.';

type Props = {
  current: BeverageBaseTypes;
};

const CurrentButton: React.FC<Props> = ({ current }) => (
  <Button
    as={Link}
    to={`/details/${current.shortId}/${current.brand.badge}/${current.badge}`}
  >
    <Dot />
  </Button>
);

export default CurrentButton;
