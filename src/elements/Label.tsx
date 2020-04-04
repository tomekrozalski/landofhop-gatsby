import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { FormName } from 'utils/enums';
import { getAnchor } from 'utils/helpers';

const Wrapper = styled.label<{ span?: string }>`
  font: var(--font-weight-light) 1.6rem / var(--size-input-height)
    var(--font-primary);
  text-align: right;
  ${({ span }) => span && `grid-column: ${span};`}

  &::after {
    content: ':';
  }
`;

type Props = {
  formName: FormName;
  label: string;
  name: string;
  span?: string;
};

const Label: React.FC<Props> = ({ formName, label, name, span }) => (
  <Wrapper htmlFor={getAnchor({ formName, name })} span={span}>
    <FormattedMessage id={label} />
  </Wrapper>
);

export default Label;
