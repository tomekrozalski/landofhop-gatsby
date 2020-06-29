import React from 'react';
import styled from 'styled-components';

import { Icon } from '.';

const Wrapper = styled.li<{ active?: boolean }>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8rem;

  &:focus {
    outline: none;
  }

  svg {
    width: 8rem;
    fill: var(${({ active }) => (active ? '--color-black' : '--color-dark')});
  }
`;

type Props = {
  active?: boolean;
  order: number;
};

const Item: React.FC<Props> = ({ active = false, order }) => (
  <Wrapper active={active}>
    <Icon order={order} />
  </Wrapper>
);

export default Item;
