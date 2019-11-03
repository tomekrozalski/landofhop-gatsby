import React from 'react';
import styled from 'styled-components';

import { StyledLink } from './elements';

const List = styled.ul`
  display: flex;
  padding: 0.5rem 0;
`;

const ListItem = styled.li`
  display: flex;
`;

const ListOfLinks = () => {
  console.log('list');
  return (
    <List>
      <ListItem>
        <StyledLink to="/about">O aplikacji</StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink to="/stats">Statystyki</StyledLink>
      </ListItem>
      {/* {#if $isLoggedIn}
				<ListItem>
					<StyledLink>Dodaj piwo</StyledLink>
				</ListItem>
			{/if} */}
    </List>
  );
};

export default ListOfLinks;
