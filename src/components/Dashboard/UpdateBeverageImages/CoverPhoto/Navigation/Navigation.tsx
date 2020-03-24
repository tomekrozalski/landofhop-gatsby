import React from 'react';
import { FormattedMessage, Link } from 'gatsby-plugin-intl';

import { BeverageBase as BeverageBaseTypes } from 'utils/types';
import { LeftIcon, RightIcon } from 'elements/icons';
import { Button, Dot, Header, Inactive, Wrapper } from '.';

type Props = {
  current: BeverageBaseTypes;
  next: BeverageBaseTypes;
  previous: BeverageBaseTypes;
};

const Navigation: React.FC<Props> = ({ current, next, previous }) => (
  <Wrapper>
    <Header>
      <FormattedMessage id="dashboard.updateBeverageImages.navigation" />
    </Header>
    {previous ? (
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
    )}
    <Button
      as={Link}
      to={`/details/${current.shortId}/${current.brand.badge}/${current.badge}`}
    >
      <Dot />
    </Button>
    {next ? (
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
    )}
  </Wrapper>
);

export default Navigation;
