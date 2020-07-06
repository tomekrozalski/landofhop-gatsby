import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { FormattedMessage, Link } from 'gatsby-plugin-intl';

import { AuthenticationContext, NavigationContext } from 'utils/contexts';
import { styledLinkCSS } from './elements';

const List = styled.ul`
  display: flex;
  padding: 0.5rem 0;
`;

const ListItem = styled.li`
  display: flex;
`;

const StyledLink = styled(Link)`
  ${styledLinkCSS}
`;

const ListOfLinks: React.FC = () => {
  const { isLoggedIn } = useContext(AuthenticationContext);
  const { setLoginbar, setNavbar } = useContext(NavigationContext);

  useEffect(() => {
    setLoginbar(false);
    setNavbar(false);
  }, []);

  return (
    <List>
      <ListItem>
        <StyledLink to="/about">
          <FormattedMessage id="navbar.about" />
        </StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink to="/stats">
          <FormattedMessage id="navbar.stats" />
        </StyledLink>
      </ListItem>
      {isLoggedIn && (
        <ListItem>
          <StyledLink to="/add-new-beverage">
            <FormattedMessage id="navbar.addBeverage" />
          </StyledLink>
        </ListItem>
      )}
    </List>
  );
};

export default ListOfLinks;
