import React from 'react';
import { bool } from 'prop-types';
import styled from 'styled-components';
import { FastField, Form } from 'formik';
import { FormattedMessage } from 'gatsby-plugin-intl';

// import { Button, Input } from 'elements';

const LoginBarContainer = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--size-container-max-width);
  margin: 0 auto;
`;

const FieldWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  max-width: 35rem;
  margin-right: 1rem;
`;

const Label = styled.label`
  margin-right: 1rem;
  font: 300 1.6rem / 1 var(--font-primary);

  &::after {
    content: ':';
  }
`;

const Button = styled.button``;
const Input = styled.input``;

const FormBody = ({ isSubmitting, isValid }) => (
  <LoginBarContainer>
    <FieldWrapper>
      <Label htmlFor="login-email">
        <FormattedMessage id="loginbar.email" />
      </Label>
      <FastField
        component={Input}
        id="login-email"
        inverse
        name="email"
        type="email"
      />
    </FieldWrapper>
    <FieldWrapper>
      <Label>
        <FormattedMessage id="loginbar.password" />
      </Label>
      <FastField
        component={Input}
        id="login-password"
        inverse
        name="password"
        type="password"
      />
    </FieldWrapper>
    <Button
      submit
      type="submit"
      disabled={!isValid}
      isSubmitting={isSubmitting}
    >
      <FormattedMessage id="loginbar.submit" />
    </Button>
  </LoginBarContainer>
);

FormBody.propTypes = {
  isSubmitting: bool.isRequired,
  isValid: bool.isRequired,
};

export default FormBody;
