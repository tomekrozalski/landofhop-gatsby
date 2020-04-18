import React from 'react';
import styled from 'styled-components';

import commonStyles from './commonStyles';

const StyledButton = styled.button`
  ${commonStyles}
  background-color: var(--color-brighter);
  color: var(--color-dark);

  &:hover {
    background-color: var(--color-black);
    color: var(--color-bright);
  }
`;

type Props = {
  onClick: () => void;
};

const AddElement: React.FC<Props> = props => (
  <StyledButton type="button" {...props}>
    +
  </StyledButton>
);

export default AddElement;
