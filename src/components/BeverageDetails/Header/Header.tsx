import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { Brand, Contract, Cooperation, Name, Remark, Series } from '.';

const HeaderWrapper = styled.header`
  grid-area: header;
  margin-top: 1rem;
`;

const Header: React.FC = () => (
  <HeaderWrapper>
    <Name />
    <p>
      <FormattedMessage id="global.brewed" /> <Remark />
      <Contract /> <Cooperation />
      <Brand />
      <Series />
    </p>
  </HeaderWrapper>
);

export default Header;
