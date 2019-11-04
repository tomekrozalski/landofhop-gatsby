import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ButtonSpinner from './ButtonSpinner';

const Wrapper = styled.button.attrs({
  type: 'button',
})`
  ${({ disabled, isSubmitting, resign, secondary, submit, wide }) => `
			width: ${wide ? '100%' : 'auto'};
			height: 3.4rem;
			padding: 0 2rem;
			background-color: var(--color-black);
			color: var(--color-white);
			transition: all .2s;
			cursor: pointer;

			${
        isSubmitting
          ? `
				padding-right: 2.4rem;
				background-color: var(--color-dark);
				cursor: not-allowed;
				position: relative;

				&:focus {
					outline: none;
				}
			`
          : ''
      }

			${resign ? 'background-color: var(--color-danger-light);' : ''}

			${
        secondary
          ? `
				background-color: var(--color-brighter);
				color: var(--color-dark);
			`
          : ''
      }

			${
        disabled
          ? `
				background-color: var(--color-dark);
				color: var(--color-brighter);
				cursor: not-allowed;
			`
          : ''
      }

			${
        !disabled
          ? `
				&:hover {
					background-color: var(--color-dark);
					color: var(--color-black);
					
					${
            resign
              ? `
						background-color: var(--color-danger-strong);
						color: var(--color-white);
					`
              : ''
          }

					${
            secondary
              ? `
						background-color: var(--color-black);
						color: var(--color-bright);
					`
              : ''
          }

					${
            submit
              ? `
						background-color: var(--color-success-light);
						color: var(--color-white);
					`
              : ''
          }

					${
            isSubmitting
              ? `
						background-color: var(--color-dark);
						color: var(--color-white);
					`
              : ''
          }
				}
			`
          : ''
      }
		`}
`;

const Button = ({ children, isSubmitting, ...props }) => (
  <Wrapper isSubmitting={isSubmitting} {...props}>
    {children}
    {isSubmitting && <ButtonSpinner />}
  </Wrapper>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  isSubmitting: PropTypes.bool,
};

Button.defaultProps = {
  isSubmitting: false,
};

export default Button;
