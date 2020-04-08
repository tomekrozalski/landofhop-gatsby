import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { FormName } from 'utils/enums';
import { getAnchor } from 'utils/helpers';

const Wrapper = styled.label`
  font: var(--font-weight-light) 1.6rem / var(--size-input-height)
    var(--font-primary);
  text-align: right;

  &::after {
    content: ':';
  }
`;

const Required = styled.em`
  margin-left: 0.2rem;
  font-style: normal;
  color: var(--color-danger-strong);
`;

type Props = {
  form: FormName;
  name: string;
  required?: boolean;
};

const Label: React.FC<Props> = ({ form, name, required = false }) => (
  <Wrapper htmlFor={getAnchor({ form, name })}>
    <FormattedMessage id={`global.${name}`} />
    {required && <Required>*</Required>}
  </Wrapper>
);

export default Label;
