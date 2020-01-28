import React, { useState } from 'react';
import styled from 'styled-components';
import Markdown from 'markdown-to-jsx';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { LanguageValue } from 'utils/types';
import { getLangAttr } from 'utils/helpers';

const TaleItemWrapper = styled.div<{ show: boolean }>`
	& + & {
		margin-top: 1rem;
	}
	
	div {
		${({ show }) => (!show && (`
			max-height: 7.5rem;
			overflow: hidden;
		`))}
	}

	button {
		margin-left: 0.2rem;
		padding: 0;
		color: var(--color-success-strong);
		border-bottom: 1px solid var(--color-white);
		transition: color var(--transition-default), border-color var(--transition-default);

		:hover {
			color: var(--color-black);
			border-color: var(--color-success-strong);
		}
	}
`;

const TaleItem: React.FC<LanguageValue> = ({ language, value }) => {
	const [show, setShow] = useState(false);

	const toggle = () => { setShow(value => !value) }

	return (
		<TaleItemWrapper lang={getLangAttr(language)} show={show}>
			<Markdown>{value}</Markdown>
			<button onClick={toggle}>
				<FormattedMessage id={`beverage.details.tale.${show ? 'readLess' : 'readMore'}`} />
			</button>
		</TaleItemWrapper>
	);
};

export default TaleItem;
