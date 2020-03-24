import React from 'react';
import styled from 'styled-components';
import { useIntl } from 'gatsby-plugin-intl';

import { breakpoints } from 'utils/theme';

const StyledButton = styled.button`
  width: 5rem;
  height: 100%;
  opacity: 1;
  transition: opacity var(--transition-default);

  @media (min-width: ${breakpoints.md}) {
    width: 10rem;
  }

  :hover {
    opacity: 0.5;
  }
`;

const Icon = styled.i<{ isActive: boolean }>`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;

  ::before,
  ::after {
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;

    @media (min-width: ${breakpoints.lg}) {
      width: 0.7rem;
      height: 0.7rem;
    }

    @media (min-width: ${breakpoints.xl}) {
      width: 1rem;
      height: 1rem;
    }
  }

  ::before {
    transition: all var(--transition-default);

    ${({ isActive }) =>
      isActive
        ? `
      background-color: var(--color-white);
      transform: translateY(-0.2rem) rotate(-45deg) scale(4, 0.3);
    `
        : `
      border-radius: 50%;
      border: 0.09rem solid var(--color-white);
      transform: translate(-50%, -50%) scale(3.6, 3.6);
    `}

    @media (min-width: ${breakpoints.lg}) {
    ${({ isActive }) =>
      isActive
        ? `
      background-color: var(--color-white);
      transform: translateY(-0.5rem) rotate(-45deg) scale(4, 0.3);
    `
        : `
      border-radius: 50%;
      border: 0.09rem solid var(--color-white);
      transform: translate(-50%, -50%) scale(3, 3);
    `}
    }

    @media (min-width: ${breakpoints.xl}) {
    ${({ isActive }) =>
      isActive
        ? `
      background-color: var(--color-white);
      transform: translateY(-0.5rem) rotate(-45deg) scale(4, 0.3);
    `
        : `
      border-radius: 50%;
      border: 0.1rem solid var(--color-white);
      transform: translate(-50%, -50%) scale(2.6, 2.6);
    `}
    }
  }

  ::after {
    background-color: var(--color-white);
    transition: transform var(--transition-default);

    ${({ isActive }) =>
      isActive
        ? 'transform: translateY(-0.2rem) rotate(45deg) scale(4, 0.3);'
        : 'transform: translate(0.6rem, 0.7rem) rotate(45deg) scale(1.4, 0.4);'}

    @media (min-width: ${breakpoints.lg}) {
      ${({ isActive }) =>
        isActive
          ? 'transform: translate(0, -0.5rem) rotate(45deg) scale(4, 0.3);'
          : 'transform: translate(0.6rem, 0.7rem) rotate(45deg) scale(1.2, 0.3);'}
    }

    @media (min-width: ${breakpoints.xl}) {
    ${({ isActive }) =>
      isActive
        ? 'transform: translate(0, -0.5rem) rotate(45deg) scale(4, 0.3);'
        : 'transform: translate(0.7rem, 0.8rem) rotate(45deg) scale(1, 0.3);'}
    }
  }
`;

type Props = {
  isActive: boolean;
  setActive: (val: boolean) => void;
};

const Button: React.FC<Props> = ({ isActive, setActive }) => {
  const intl = useIntl();

  return (
    <StyledButton type="button" onClick={() => setActive(!isActive)}>
      <Icon
        isActive={isActive}
        aria-label={intl.formatMessage({ id: 'header.search' })}
      />
    </StyledButton>
  );
};

export default Button;
