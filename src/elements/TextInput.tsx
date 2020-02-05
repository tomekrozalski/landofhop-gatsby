import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { FieldAttributes, useField } from 'formik';

import FieldStatusIndicator from './FieldStatusIndicator';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  max-width: 35rem;
  margin: 1rem;
`;

const Label = styled.label`
  margin-right: 1rem;
  font: var(--font-weight-light) 1.6rem / 1 var(--font-primary);

  &::after {
    content: ':';
  }
`;

const Input: any = styled.input<{ invert: boolean }>`
  display: block;
  width: 100%;
  height: var(--size-input-height);
  border: 0;
  border-bottom: 1px solid var(--color-dark);
  padding: 0 25px 0 1rem;
  background-color: var(--color-${({ invert }) => (invert ? 'white' : 'brighter')});
  font: var(--font-weight-light) 1.6rem / 1 var(--font-primary);
  color: var(--color-black);

  &:focus {
    outline: none;
    border-bottom-color: var(--color-black);
  }

  &:disabled {
    border-bottom: 1px solid var(--color-bright);
    background-color: var(--color-brightest);
    color: var(--color-darker);
    cursor: not-allowed;
  }
`;

type Props = {
  invert?: boolean
  label: string
}

const TextInput: React.FC<Props & FieldAttributes<{}>> = ({
  invert = false,
  label,
  ...props
}) => {
  const [field, { error, touched }] = useField<{}>(props);
  const fieldName = label.toLowerCase().replace('.', '-');

  return (
    <Wrapper>
      <Label htmlFor={fieldName}>
        <FormattedMessage id={label} />
      </Label>
      {touched ? (
        <FieldStatusIndicator error={error}>
          <Input
            {...field}
            {...props}
            id={fieldName}
            invert={invert}
          />
        </FieldStatusIndicator>
      ) : (
          <Input
            {...field}
            {...props}
            id={fieldName}
            invert={invert}
          />
        )}
    </Wrapper>
  );
};

export default TextInput;
