import React, { useContext } from 'react';
import styled from 'styled-components';

import { FormName } from 'utils/enums';
import { NavigationContext } from 'dashboard/utils/contexts';
import { Item } from '.';

const List = styled.ul`
  display: flex;
  flex-grow: 1;
`;

const ProgressList: React.FC = () => {
  const { part } = useContext(NavigationContext);

  return (
    <List>
      <Item order={1} active={part === FormName.beverageLabel} />
      <Item order={2} active={part === FormName.beverageProducer} />
      <Item order={3} active={part === FormName.beverageEditorial} />
    </List>
  );
};

export default ProgressList;
