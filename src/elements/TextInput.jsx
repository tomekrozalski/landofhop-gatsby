import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { useField } from 'formik';

import FieldStatusIndicator from './FieldStatusIndicator';

const Wrapper = styled.div`
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

const TextInput = ({ label, ...props }) => {
  const [field, { error, touched }] = useField(props);
  const fieldName = label.toLowerCase().replace('.', '-');

  return (
    <Wrapper>
      <Label htmlFor={fieldName}>
        <FormattedMessage id={label} />
      </Label>
      {touched ? (
        <FieldStatusIndicator error={error}>
          <input
            {...field}
            {...props}
            className="withStatusIcon"
            id={fieldName}
          />
        </FieldStatusIndicator>
      ) : (
        <input {...field} {...props} id={fieldName} />
      )}
    </Wrapper>
  );
};

TextInput.propTypes = {
  label: string,
};

TextInput.defaultProps = {
  label: '',
};

export default TextInput;
