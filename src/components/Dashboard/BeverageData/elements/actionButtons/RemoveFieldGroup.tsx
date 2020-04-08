import React from 'react';
import styled from 'styled-components';

import commonStyles from './commonStyles';

const StyledButton = styled.button`
  ${commonStyles}
  background-color: var(--color-danger-light);
  color: var(--color-white);

  &:hover {
    background-color: var(--color-danger-strong);
  }
`;

type Props = {
  onClick: () => void;
};

const RemoveFieldGroup: React.FC<Props> = props => (
  <StyledButton type="button" {...props}>
    -
  </StyledButton>
);

export default RemoveFieldGroup;
