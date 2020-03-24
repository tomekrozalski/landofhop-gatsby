import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby-plugin-intl';

import { breakpoints } from 'utils/theme';
import { BeverageBase as BeverageBaseTypes } from 'utils/types';
import { LeftIcon, RightIcon } from 'elements/icons';

const Wrapper = styled.aside`
  grid-area: aside;
  display: flex;
  justify-content: center;
  padding: 1rem;

  @media (min-width: ${breakpoints.md}) {
    justify-content: flex-end;
  }

  @media (min-width: ${breakpoints.lg}) {
    justify-content: center;
  }
`;

const Inactive = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  margin: 1rem;
  border-radius: 50%;
  background-color: var(--color-brighter);
  color: var(--color-darker);
  pointer-events: none;

  svg {
    width: 1.6rem;
    fill: var(--color-darker);
    transition: fill var(--transition-default);
  }
`;

const Button = styled(Inactive)`
  border: 0.2rem solid var(--color-darker);
  background-color: transparent;
  transition: all var(--transition-default);
  pointer-events: auto;

  :hover {
    background-color: var(--color-black);
    border-color: var(--color-black);

    svg {
      fill: var(--color-white);
    }
  }
`;

type Props = {
  next: BeverageBaseTypes;
  previous: BeverageBaseTypes;
};

const Aside: React.FC<Props> = ({ next, previous }) => (
  <Wrapper>
    {previous ? (
      <Button
        as={Link}
        to={`/details/${previous.shortId}/${previous.brand.badge}/${previous.badge}`}
      >
        <LeftIcon />
      </Button>
    ) : (
      <Inactive>
        <LeftIcon />
      </Inactive>
    )}
    {next ? (
      <Button
        as={Link}
        to={`/details/${next.shortId}/${next.brand.badge}/${next.badge}`}
      >
        <RightIcon />
      </Button>
    ) : (
      <Inactive>
        <RightIcon />
      </Inactive>
    )}
  </Wrapper>
);

export default Aside;
