import React from 'react';
import styled from 'styled-components';

import { Item } from '.';

const Wrapper = styled.div``;

const List = styled.ul`
  grid-column: 1 / -1;
  display: flex;
`;

const ProgressList: React.FC = () => (
  <Wrapper>
    <List>
      <Item order={1} />
      <Item order={2} />
      <Item order={3} />
    </List>
  </Wrapper>
);

export default ProgressList;
