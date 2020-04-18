import React from 'react';
import styled from 'styled-components';

import { Icon } from '.';

const Wrapper = styled.li`
  flex: 1;
`;

const Button = styled.button.attrs({
  type: 'button',
})`
  display: block;
  width: 100%;
  height: 8rem;

  &:focus {
    outline: none;
  }

  svg {
    width: 8rem;
  }
`;

const Item: React.FC<{ order: number }> = ({ order }) => (
  <Wrapper>
    <Button>
      <Icon order={order} />
    </Button>
  </Wrapper>
);

export default Item;
