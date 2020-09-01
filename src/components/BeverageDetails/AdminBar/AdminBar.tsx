import React, { useContext } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { AuthenticationContext } from 'utils/contexts';
import { BeverageContext } from 'components/BeverageDetails/utils/contexts';
import {
  AdminBarWrapper,
  ButtonsWrapper,
  Notes,
  RemoveBeverage,
  StyledLink,
} from '.';

const AdminBar: React.FC = () => {
  const { isLoggedIn } = useContext(AuthenticationContext);
  const { badge, brand, shortId } = useContext(BeverageContext);

  return isLoggedIn ? (
    <AdminBarWrapper>
      <ButtonsWrapper>
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
        <RemoveBeverage />
      </ButtonsWrapper>
      <Notes />
    </AdminBarWrapper>
  ) : null;
};

export default AdminBar;
