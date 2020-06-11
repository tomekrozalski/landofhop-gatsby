import React from 'react';
import styled from 'styled-components';

import { Icon } from '.';

const Wrapper = styled.li`
  flex: 1;
`;

const Button = styled.button.attrs({
  type: 'button',
})<{ active?: boolean }>`
  display: block;
  width: 100%;
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
  <Wrapper>
    <Button active={active}>
      <Icon order={order} />
    </Button>
  </Wrapper>
);

export default Item;
