import styled from 'styled-components';
import Inactive from './Inactive';

const Button = styled(Inactive)`
	border: .2rem solid var(--color-darker);
	background-color: transparent;
	transition: all var(--transition-default);
	pointer-events: auto;

	:hover {
		background-color: var(--color-black);
		border-color: var(--color-black);

		svg {
			fill: var(--color-white);
		}
	}
`;

export default Button;
