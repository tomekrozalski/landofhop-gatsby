import React from 'react';
import styled from 'styled-components';

import { Item } from '.';

const List = styled.ul`
  display: flex;
`;

const ProgressList: React.FC = () => (
  <List>
    <Item order={1} />
    <Item order={2} />
    <Item order={3} />
  </List>
);

export default ProgressList;
