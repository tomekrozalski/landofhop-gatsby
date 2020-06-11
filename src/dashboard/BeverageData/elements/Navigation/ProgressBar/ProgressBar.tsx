import React from 'react';
import styled from 'styled-components';

import { Item } from '.';

const List = styled.ul`
  display: flex;
  flex-grow: 1;
`;

const ProgressList: React.FC = () => (
  <List>
    <Item order={1} active />
    <Item order={2} />
    <Item order={3} />
  </List>
);

export default ProgressList;
