import React, { useContext } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { AuthenticationContext } from 'utils/contexts';
import { Warning } from 'elements/icons';
import { IconWrapper, LoginBarContainer, ResetButton } from './elements';

const LoginError = () => {
  const { logInAfterFailure } = useContext(AuthenticationContext);

  return (
    <LoginBarContainer as="div">
      <IconWrapper>
        <Warning />
      </IconWrapper>
      <FormattedMessage id="loginbar.loginFailed" />
      <ResetButton onClick={logInAfterFailure}>
        <FormattedMessage id="loginbar.tryAgain" />
      </ResetButton>
    </LoginBarContainer>
  );
};

export default LoginError;
