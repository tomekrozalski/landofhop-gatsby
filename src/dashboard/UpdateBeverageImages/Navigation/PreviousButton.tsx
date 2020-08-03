import React from 'react';
import { Link } from 'gatsby-plugin-intl';

import { BeverageBase as BeverageBaseTypes } from 'utils/types';
import { Left as LeftIcon } from 'elements/icons';
import { Button, Inactive } from '.';

type Props = {
  previous?: BeverageBaseTypes;
};

const PreviousButton: React.FC<Props> = ({ previous }) => {
  return previous ? (
    <Button
      as={Link}
      to={`/update-beverage-images/${previous.shortId}/${previous.brand.badge}/${previous.badge}`}
    >
      <LeftIcon />
    </Button>
  ) : (
    <Inactive>
      <LeftIcon />
    </Inactive>
  );
};

export default PreviousButton;
