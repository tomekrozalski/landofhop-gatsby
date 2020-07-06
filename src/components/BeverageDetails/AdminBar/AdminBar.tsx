import React, { useContext } from 'react';
import styled from 'styled-components';
import { FormattedMessage, Link } from 'gatsby-plugin-intl';

import { AuthenticationContext } from 'utils/contexts';
import { ButtonBasicCSS } from 'elements';
import { BeverageContext } from 'components/BeverageDetails/utils/contexts';

const AdminBarWrapper = styled.div`
  grid-area: admin;
  display: flex;
  align-items: flex-start;
`;

const StyledLink = styled(Link)`
  ${ButtonBasicCSS}
  padding: 0 2rem;
  background-color: var(--color-black);
  color: var(--color-white);

  &:hover {
    background-color: var(--color-success-strong);
  }

  & + & {
    margin-left: 1rem;
  }
`;

const AdminBar = () => {
  const { isLoggedIn } = useContext(AuthenticationContext);
  const { badge, brand, shortId } = useContext(BeverageContext);

  return isLoggedIn ? (
    <AdminBarWrapper>
      <StyledLink
        to="/update-beverage"
        state={{ badge, brand: brand.badge, shortId }}
      >
        <FormattedMessage id="beverage.details.adminBar.update" />
      </StyledLink>
      <StyledLink
        to="/update-beverage-images"
        state={{ badge, brand: brand.badge, shortId }}
      >
        <FormattedMessage id="beverage.details.adminBar.updatePhotos" />
      </StyledLink>
    </AdminBarWrapper>
  ) : null;
};

export default AdminBar;
