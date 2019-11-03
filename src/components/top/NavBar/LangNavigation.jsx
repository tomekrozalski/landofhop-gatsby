import React, { useContext } from 'react';
import styled from 'styled-components';

import { LanguageContext } from 'utils/contexts';
import { siteLanguages } from 'utils/constants';
import { StyledLink } from './elements';

const List = styled.ul`
  display: flex;
  margin: 0 0.5rem;
  padding: 0.5rem 0;
`;

const ListItem = styled.li`
  display: flex;
`;

const LangNavigation = () => {
  const { changeLanguage } = useContext(LanguageContext);
  const { en, pl } = siteLanguages;

  return (
    <List>
      <ListItem>
        <StyledLink
          as="button"
          onClick={() => changeLanguage(pl)}
          type="button"
        >
          {pl.toUpperCase()}
        </StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink
          as="button"
          onClick={() => changeLanguage(en)}
          type="button"
        >
          {en.toUpperCase()}
        </StyledLink>
      </ListItem>
    </List>
  );
};

export default LangNavigation;
