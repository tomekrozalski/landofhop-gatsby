import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'gatsby-plugin-intl';

const StyledButton = styled.button`
  grid-column: span 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: var(--color-brightest);
  color: var(--color-dark);
  cursor: crosshair;
`;

type Props = {
  onClick: () => void;
};

const Plug: React.FC<Props> = ({ onClick }) => (
  <StyledButton type="button" onClick={onClick}>
    <FormattedMessage id="dashboard.reveal" />
  </StyledButton>
);

export default Plug;
