import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { FieldName, FormName } from 'utils/enums';
import { Button, Label, TextInput } from 'elements';
import { LoginBarContainer, TextInputWrapper } from './elements';

type Props = {
  isSubmitting: boolean;
  isValid: boolean;
};

const FormBody: React.FC<Props> = ({ isSubmitting, isValid }) => (
  <LoginBarContainer action="/admin" noValidate>
    <TextInputWrapper>
      <Label name={FieldName.email} form={FormName.logIn} />
      <TextInput
        form={FormName.logIn}
        name={FieldName.email}
        type="email"
        invert
      />
    </TextInputWrapper>
    <TextInputWrapper>
      <Label name={FieldName.password} form={FormName.logIn} />
      <TextInput
        form={FormName.logIn}
        name={FieldName.password}
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
