import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'gatsby-plugin-intl';

const StyledButton = styled.button<{ wide: boolean }>`
  grid-column: span ${({ wide }) => (wide ? 2 : 1)};
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
  wide?: boolean;
};

const Plug: React.FC<Props> = ({ onClick, wide = false }) => (
  <StyledButton type="button" onClick={onClick} wide={wide}>
    <FormattedMessage id="dashboard.reveal" />
  </StyledButton>
);

export default Plug;
