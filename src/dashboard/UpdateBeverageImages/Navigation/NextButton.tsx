import React from 'react';
import { Link } from 'gatsby-plugin-intl';

import { BeverageBase as BeverageBaseTypes } from 'utils/types';
import { Right as RightIcon } from 'elements/icons';
import { Button, Inactive } from '.';

type Props = {
  next?: BeverageBaseTypes;
};

const NextButton: React.FC<Props> = ({ next }) =>
  next ? (
    <Button
      as={Link}
      to={`/update-beverage-images/${next.shortId}/${next.brand.badge}/${next.badge}`}
    >
      <RightIcon />
    </Button>
  ) : (
    <Inactive>
      <RightIcon />
    </Inactive>
  );

export default NextButton;
