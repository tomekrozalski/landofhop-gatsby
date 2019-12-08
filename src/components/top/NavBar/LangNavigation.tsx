import React from 'react';
import styled from 'styled-components';
import { changeLocale, IntlContextConsumer } from 'gatsby-plugin-intl';

import SiteLanguages from 'utils/enums/SiteLanguages.enum';
import { styledLinkCSS } from './elements';

const List = styled.ul`
  display: flex;
  margin: 0 0.5rem;
  padding: 0.5rem 0;
`;

const ListItem = styled.li`
  display: flex;
`;

const Button = styled.button`
  ${styledLinkCSS}
`;

const LangNavigation: React.FC = () => (
  <List>
    <IntlContextConsumer>
      {({ languages }: { languages: SiteLanguages[] }) =>
        languages.map(language => (
          <ListItem key={language}>
            <Button onClick={() => changeLocale(language)} type="button">
              {language.toUpperCase()}
            </Button>
          </ListItem>
        ))
      }
    </IntlContextConsumer>
  </List>
);

export default LangNavigation;
