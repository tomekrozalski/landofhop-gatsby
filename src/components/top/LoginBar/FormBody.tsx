import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { FormName } from 'utils/enums';
import { Button, Label, TextInput } from 'elements';
import { fields } from './utils';
import { LoginBarContainer, TextInputWrapper } from './elements';

type Props = {
  isSubmitting: boolean;
  isValid: boolean;
};

const FormBody: React.FC<Props> = ({ isSubmitting, isValid }) => (
  <LoginBarContainer action="/admin" noValidate>
    <TextInputWrapper>
      <Label {...fields.email} formName={FormName.logIn} />
      <TextInput
        {...fields.email}
        formName={FormName.logIn}
        type="email"
        invert
      />
    </TextInputWrapper>
    <TextInputWrapper>
      <Label {...fields.password} formName={FormName.logIn} />
      <TextInput
        {...fields.password}
        formName={FormName.logIn}
        type="password"
        invert
      />
    </TextInputWrapper>
    <Button disabled={!isValid} isSubmitting={isSubmitting} type="submit">
      <FormattedMessage id="loginbar.submit" />
    </Button>
  </LoginBarContainer>
);

export default FormBody;
