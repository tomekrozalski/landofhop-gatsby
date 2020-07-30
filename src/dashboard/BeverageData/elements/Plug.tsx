import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'gatsby-plugin-intl';

const StyledButton = styled.button<{ wide: number }>`
  grid-column: span ${({ wide }) => wide};
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
  wide?: number;
};

const Plug: React.FC<Props> = ({ onClick, wide = 1 }) => (
  <StyledButton type="button" onClick={onClick} wide={wide}>
    <FormattedMessage id="dashboard.reveal" />
  </StyledButton>
);

export default Plug;
