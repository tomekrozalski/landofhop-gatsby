import React from 'react';
import styled from 'styled-components';

import { Edit as EditIcon } from 'elements/icons';

const Button = styled.button`
  width: 2.8rem;
  height: 2.8rem;
  margin-left: 0.5rem;
  border-radius: 50%;
  background-color: var(--color-white);
  transition: background-color var(--transition-default);
  position: absolute;

  svg {
    height: 1.2rem;
    fill: var(--color-darker);
    transition: fill var(--transition-default);
  }

  &:hover {
    background-color: var(--color-black);

    svg {
      fill: var(--color-white);
    }
  }
`;

const EditButton = () => (
  <Button type="button">
    <EditIcon />
  </Button>
);

export default EditButton;
