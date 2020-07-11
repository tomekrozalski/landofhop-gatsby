import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { FieldStatusIndicator } from 'elements';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  border: var(--color-danger-strong) solid 0.2rem;
  padding: 0 1rem 0 2rem;
`;

const Error = () => (
  <Wrapper>
    <FieldStatusIndicator danger position={1.3}>
      <FormattedMessage id="dashboard.loadError" />
    </FieldStatusIndicator>
  </Wrapper>
);

export default Error;
