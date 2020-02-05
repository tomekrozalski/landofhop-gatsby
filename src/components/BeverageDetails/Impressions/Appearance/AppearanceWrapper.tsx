import styled from 'styled-components';

const AppearanceWrapper = styled.dl`
	flex-basis: 50%;
	display: flex;
	flex-wrap: wrap;
	margin: 1rem 0;

	dt {
		flex-basis: 40%;
		padding-right: .7rem;
		text-align: right;

		&::first-letter {
			text-transform: uppercase;
		}

		&::after {
			content: ':';
		}
	}

	dd {
		flex-basis: 60%;
		margin: 0;
		padding: 0;
	}

	dd::after {
		display: block;
		content: '';
	}
`;

export default AppearanceWrapper;
