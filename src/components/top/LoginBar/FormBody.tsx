import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { Button, TextInput } from 'elements';
import { LoginBarContainer } from './elements';

type Props = {
  isSubmitting: boolean;
  isValid: boolean;
};

const FormBody: React.FC<Props> = ({ isSubmitting, isValid }) => (
  <LoginBarContainer action="/admin" noValidate>
    <TextInput label="loginbar.email" name="email" type="email" invert />
    <TextInput
      label="loginbar.password"
      name="password"
      type="password"
      invert
    />
    <Button disabled={!isValid} isSubmitting={isSubmitting} type="submit">
      <FormattedMessage id="loginbar.submit" />
    </Button>
  </LoginBarContainer>
);

export default FormBody;
