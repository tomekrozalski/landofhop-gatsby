import styled from 'styled-components';

import { breakpoints } from 'utils/theme';

const Input = styled.input.attrs({
	type: 'text'
})`
	display: block;
	width: 100%;
	height: var(--size-header-height);
	border: 0;
	padding: 0 10rem 0 2rem;
	background: transparent;
	font-weight: var(--font-weight-regular);
	font-size: 2rem;
	line-height: 1;
	font-family: var(--font-primary);
	text-transform: uppercase;
	color: var(--color-white);
	position: absolute;
	top: 0;
	left: 0;
	opacity: 0;
	cursor: pointer;

	@media (min-width: ${breakpoints.md}) {
		font-size: 3rem;
	}

	@media (min-width: ${breakpoints.xl}) {
		height: calc(var(--size-header-height) - 4rem);
		margin: 2rem 0;
		border-bottom: 0.2rem solid var(--color-white);
		font: var(--font-weight-regular) 4rem / 1 var(--font-primary);
	}

	&:focus {
		opacity: 1;
		cursor: initial;
	}
`;

export default Input;
