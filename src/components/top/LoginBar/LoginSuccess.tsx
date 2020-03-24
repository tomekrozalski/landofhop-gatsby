import React, { useContext } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { formatDistanceStrict } from 'date-fns';
import pl from 'date-fns/locale/pl';

import { AuthenticationContext } from 'utils/contexts';
import { Checkmark } from 'elements/icons';
import { IconWrapper, LoginBarContainer } from './elements';

const LoginSuccess = () => {
  const { tokenExpirationDate } = useContext(AuthenticationContext);

  return (
    <LoginBarContainer as="div">
      <IconWrapper>
        <Checkmark />
      </IconWrapper>
      <FormattedMessage
        id="loginbar.loginSuccess"
        values={{
          expiresIn: formatDistanceStrict(tokenExpirationDate, new Date(), {
            addSuffix: true,
            locale: pl,
          }),
        }}
      />
    </LoginBarContainer>
  );
};

export default LoginSuccess;
