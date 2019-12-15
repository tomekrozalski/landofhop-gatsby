import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby-plugin-intl';

import { BeverageBase } from 'utils/types';

const Wrapper = styled.ul`
	display: flex;
	justify-content: center;
	padding: 1rem;
`;

const Inactive = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 5rem;
	height: 5rem;
	margin: 1rem;
	border-radius: 50%;
	background-color: #eee;
	color: #999;
`;

const Button = styled(Inactive)`
	background-color: #ddd;

	:hover {
		background-color: #333;
	}
`;

type Props = {
	next: BeverageBase
	previous: BeverageBase
}

const Aside: React.FC<Props> = ({ next, previous }) => (
	<Wrapper>
		{previous
			? <Button as={Link} to={`/details/${previous.shortId}/${previous.label.general.brand.badge}/${previous.badge}`}>←</Button>
			: <Inactive>←</Inactive>}
		{next
			? <Button as={Link} to={`/details/${next.shortId}/${next.label.general.brand.badge}/${next.badge}`}>→</Button>
			: <Inactive>→</Inactive>}
	</Wrapper>
);

export default Aside;
