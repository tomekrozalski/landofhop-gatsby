import { Link } from 'gatsby-plugin-intl';
import styled from 'styled-components';

const StyledLink = styled(Link)`
	width: 100%;
	text-align: center;

	&:hover img {
		transform: scale(0.9);
	}
`;

export default StyledLink;
