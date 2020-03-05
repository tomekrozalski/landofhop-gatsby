import React from 'react';
import styled from 'styled-components';
import { FormattedMessage, Link } from 'gatsby-plugin-intl';

import { BeverageBase as BeverageBaseTypes } from 'utils/types';
import { LeftIcon, RightIcon } from 'elements/icons';

const Wrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	padding: 2rem 1rem 1rem 1rem;
	border: 1px solid var(--color-bright);
	position: relative;
`;

const Header = styled.h3`
	display: inline-block;
	margin: 0;
	padding: 0 1rem;
	background: var(--color-white);
	font: var(--font-weight-regular) 1.5rem / 1 var(--font-primary);
	position: absolute;
	top: 0;
	left: 2rem;
	transform: translateY(-50%);
`;

const Inactive = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 5rem;
	height: 5rem;
	margin: 1rem;
	border-radius: 50%;
	background-color: var(--color-brighter);
	color: var(--color-darker);
	pointer-events: none;

	svg {
		width: 1.6rem;
		fill: var(--color-darker);
		transition: fill var(--transition-default);
	}
`;

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

const Dot = styled.i`
	display: inline-block;
	width: 1rem;
	height: 1rem;
	border-radius: 50%;
	background-color: var(--color-darker);
`;

type Props = {
	current: BeverageBaseTypes
	next: BeverageBaseTypes
	previous: BeverageBaseTypes
}

const Navigation: React.FC<Props> = ({ current, next, previous }) => (
	<Wrapper>
		<Header>
			<FormattedMessage id="dashboard.updateBeverageImages.navigation" />
		</Header>
		{previous
			? <Button as={Link} to={`/update-beverage-images/${previous.shortId}/${previous.brand.badge}/${previous.badge}`}><LeftIcon /></Button>
			: <Inactive><LeftIcon /></Inactive>}
		<Button as={Link} to={`/details/${current.shortId}/${current.brand.badge}/${current.badge}`}><Dot /></Button>
		{next
			? <Button as={Link} to={`/update-beverage-images/${next.shortId}/${next.brand.badge}/${next.badge}`}><RightIcon /></Button>
			: <Inactive><RightIcon /></Inactive>}
	</Wrapper>
);

export default Navigation;
