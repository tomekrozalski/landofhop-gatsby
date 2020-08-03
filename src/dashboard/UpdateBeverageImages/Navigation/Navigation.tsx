import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { BeverageBase as BeverageBaseTypes } from 'utils/types';
import {
  CurrentButton,
  Header,
  NextButton,
  PreviousButton,
  RefreshButton,
  Wrapper,
} from '.';

type Props = {
  current: BeverageBaseTypes;
  next?: BeverageBaseTypes;
  previous?: BeverageBaseTypes;
};

const Navigation: React.FC<Props> = ({ current, next, previous }) => (
  <Wrapper>
    <Header>
      <FormattedMessage id="dashboard.updateBeverageImages.navigation" />
    </Header>
    <PreviousButton previous={previous} />
    <CurrentButton current={current} />
    <NextButton next={next} />
    <RefreshButton />
  </Wrapper>
);

export default Navigation;
