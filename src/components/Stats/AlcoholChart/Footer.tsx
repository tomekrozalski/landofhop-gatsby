import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'gatsby-plugin-intl';

const Wrapper = styled.footer`
	text-align: right;
`;

type Props = {
	undefinedAlcohol: number
}

const Footer: React.FC<Props> = ({ undefinedAlcohol }) => (
	<Wrapper>
		<FormattedMessage id="stats.alcohol.beveragesWithUnknownAlcohol" values={{ value: undefinedAlcohol }} />
	</Wrapper>
);

export default Footer;
