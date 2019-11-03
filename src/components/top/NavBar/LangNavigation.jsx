import React from 'react';
import styled from 'styled-components';
import { changeLocale, IntlContextConsumer } from 'gatsby-plugin-intl';

import { StyledLink } from './elements';

const List = styled.ul`
  display: flex;
  margin: 0 0.5rem;
  padding: 0.5rem 0;
`;

const ListItem = styled.li`
  display: flex;
`;

const LangNavigation = () => (
  <List>
    <IntlContextConsumer>
      {({ languages }) =>
        languages.map(language => (
          <ListItem key={language}>
            <StyledLink
              as="button"
              onClick={() => changeLocale(language)}
              type="button"
            >
              {language.toUpperCase()}
            </StyledLink>
          </ListItem>
        ))
      }
    </IntlContextConsumer>
  </List>
);

export default LangNavigation;
