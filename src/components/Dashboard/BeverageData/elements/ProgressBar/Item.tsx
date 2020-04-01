import React from 'react';
import styled from 'styled-components';

import { Label, Producer, Editorial } from '../icons';

const Wrapper = styled.li`
  flex: 1;
`;

const Button = styled.button.attrs({
  type: 'button',
})`
  display: block;
  width: 100%;
  height: 8rem;

  position: relative;

  &:focus {
    outline: none;
  }

  svg {
    width: 8rem;
  }
`;

const Item: React.FC<{ order: number }> = ({ order }) => {
  let Icon;

  switch (order) {
    case 1:
      Icon = Label;
      break;
    case 2:
      Icon = Producer;
      break;
    default:
    case 3:
      Icon = Editorial;
      break;
  }

  return (
    <Wrapper>
      <Button>
        <Icon />
      </Button>
    </Wrapper>
  );
};

export default Item;
