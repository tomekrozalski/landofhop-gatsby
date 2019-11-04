import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'lodash/get';
import isNull from 'lodash/isNull';

import FieldStatusIndicator from './FieldStatusIndicator';

export const StyledInput = styled.input.attrs({
  type: 'text',
})`
  ${({ inverse, withIcon }) => `
		display: block;
		width: 100%;
		height: var(--size-input-height);
		border: 0;
		border-bottom: 1px solid var(--color-dark);
		padding: ${withIcon ? '0 25px 0 1rem' : '0 1rem'};
		background-color: var(--color-${inverse ? 'white' : 'brighter'});
		font: 300 1.6rem / 1 var(--font-primary);
		color: var(--color-black);
	`}

  &:focus {
    outline: none;
    border-bottom-color: var(--color-black);
  }

  &:disabled {
    ${({ inverse }) => `
			border-bottom: 1px solid var(--color-bright);
			background-color: var(--color-${inverse ? 'brighter' : 'brightest'};
			color: var(--color-darker);
			cursor: not-allowed;
		`}
  }
`;

const Input = ({ field, ...props }) => {
  const disabled = isNull(get(field, 'value'));
  const name = get(field, 'name');
  const error = get(props, `form.errors.${name}`);
  const touched = get(props, `form.touched.${name}`);
  const success = !error && touched && !disabled && field.value !== '';
  const warning = error && touched && !disabled;

  return (
    <FieldStatusIndicator success={success} touched={touched} warning={warning}>
      <StyledInput
        disabled={disabled}
        withIcon={success || warning}
        onChange={() => {}}
        {...field}
        value={field.value === null ? '' : field.value}
        {...props}
      />
    </FieldStatusIndicator>
  );
};

Input.propTypes = {
  error: PropTypes.string,
  field: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.any,
  }),
  form: PropTypes.shape({
    touched: PropTypes.any,
  }),
  search: PropTypes.bool,
};

Input.defaultProps = {
  error: null,
  field: {
    name: '',
    value: '',
  },
  form: {
    touched: {},
  },
  search: false,
};

export default Input;
