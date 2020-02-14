import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { breakpoints } from 'utils/theme';

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 100%;
  transition: opacity var(--transition-default);

  :hover {
    opacity: .5;
  }
`;

const Icon = styled.i<{ isActive: boolean }>`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;

  ::before {
    display: inline-block;
    transition: all var(--transition-default);
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    ${({ isActive }) => (isActive ? `
      width: 4rem;
      height: 0.3rem;
      background-color: var(--color-white);
      transform: rotate(-45deg);
    ` : `
      width: 2.6rem;
      height: 2.6rem;
      border-radius: 50%;
      border: 0.3rem solid var(--color-white);
      transform: translate(-50%, -50%);
    `)}
  }

  ::after {
    display: inline-block;
    height: 0.3rem;
    content: '';
    background-color: var(--color-white);
    position: absolute;
    
    top: 50%;
    left: 50%;

    ${({ isActive }) => (isActive ? `
      width: 4rem;
      transform: rotate(45deg);
    ` : `
      width: 1rem;
      transform: rotate(45deg) translate(1.3rem, 0.3rem);
    `)}

  }
`;

type Props = {
  isActive: boolean
  setActive: (val: boolean) => void
}

const Button: React.FC<Props> = ({ isActive, setActive }) => (
  <StyledButton type="button" onClick={() => setActive(!isActive)}>
    {/* <FormattedMessage id="header.search" /> */}
    <Icon isActive={isActive} />
  </StyledButton>
);

export default Button;
