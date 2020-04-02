import React, { useContext } from 'react';
import styled from 'styled-components';
import { FormattedMessage, Link } from 'gatsby-plugin-intl';

import { AuthenticationStatus as AuthenticationStatusEnum } from 'utils/enums';
import { AuthenticationContext, BeverageContext } from 'utils/contexts';
import { ButtonBasicCSS } from 'elements';

const AdminBarWrapper = styled.div`
  grid-area: admin;
  display: flex;
  align-items: flex-start;
`;

const StyledLink = styled(Link)`
  ${ButtonBasicCSS}
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
  const { authenticationStatus } = useContext(AuthenticationContext);
  const { badge, brand, shortId } = useContext(BeverageContext);

  return authenticationStatus === AuthenticationStatusEnum.success ? (
    <AdminBarWrapper>
      <StyledLink
        to="/update-beverage"
        state={{ badge, brand: brand.badge, shortId }}
      >
        <FormattedMessage id="beverage.details.adminBar.update" />
      </StyledLink>
      <StyledLink
        to={`/update-beverage-images/${shortId}/${brand.badge}/${badge}`}
      >
        <FormattedMessage id="beverage.details.adminBar.updatePhotos" />
      </StyledLink>
    </AdminBarWrapper>
  ) : null;
};

export default AdminBar;
