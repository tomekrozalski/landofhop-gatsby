import React from 'react';
import { bool } from 'prop-types';
import styled from 'styled-components';
import { Form } from 'formik';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { Button, TextInput } from 'elements';

const LoginBarContainer = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--size-container-max-width);
  margin: 0 auto;
`;

const FormBody = props => {
  const { isSubmitting, isValid } = props;

  return (
    <LoginBarContainer>
      <TextInput label="loginbar.email" name="email" type="email" />
      <TextInput label="loginbar.password" name="password" type="password" />
      <Button disabled={!isValid} isSubmitting={isSubmitting} type="submit">
        <FormattedMessage id="loginbar.submit" />
      </Button>
    </LoginBarContainer>
  );
};

FormBody.propTypes = {
  isSubmitting: bool.isRequired,
  isValid: bool.isRequired,
};

export default FormBody;
