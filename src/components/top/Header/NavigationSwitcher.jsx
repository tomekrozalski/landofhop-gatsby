import React, { useContext } from 'react';
import styled from 'styled-components';

import { NavigationContext } from 'utils/contexts';
import { breakpoints } from 'utils/theme';

const Button = styled.button`
  grid-area: more;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover svg {
    opacity: 0.5;
  }

  svg {
    display: block;
    width: 2rem;
    height: 0.4rem;
    opacity: 1;
    transition: opacity var(--transition-default);

    @media (min-width: ${breakpoints.xl}) {
      width: 4rem;
      height: 0.8rem;
    }

    circle {
      fill: var(--color-white);
    }
  }
`;

const NavigationSwitcher = () => {
  const { setLoginbar, toggleNavbar } = useContext(NavigationContext);

  return (
    <Button
      onClick={() => {
        toggleNavbar();
        setLoginbar(false);
      }}
      type="button"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 9">
        <title>Open</title>
        <circle cx="35.5" cy="4.5" r="4.5" />
        <circle cx="20" cy="4.5" r="4.5" />
        <circle cx="4.5" cy="4.5" r="4.5" />
      </svg>
    </Button>
  );
};

export default NavigationSwitcher;
