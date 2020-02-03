import React from 'react';
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
  padding: 0 2rem;
`;

type Props = {
  isSubmitting: boolean
  isValid: boolean
}

const FormBody: React.FC<Props> = ({ isSubmitting, isValid }) => (
  <LoginBarContainer action="/admin" noValidate>
    <TextInput label="loginbar.email" name="email" type="email" />
    <TextInput label="loginbar.password" name="password" type="password" />
    <Button disabled={!isValid} isSubmitting={isSubmitting} type="submit">
      <FormattedMessage id="loginbar.submit" />
    </Button>
  </LoginBarContainer>
);

export default FormBody;
