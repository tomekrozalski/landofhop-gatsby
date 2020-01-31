import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Markdown from 'markdown-to-jsx';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { LanguageValue } from 'utils/types';
import { getLangAttr } from 'utils/helpers';

const TaleItemWrapper = styled.div`
	& + & {
		margin-top: 1rem;
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

const slicedText = (value: string) => value.split(' ').slice(0, 30).join(' ');

const TaleItem: React.FC<LanguageValue> = ({ language, value }) => {
	const [expanded, setExpanded] = useState(false);
	const [text, setText] = useState(slicedText(value));

	useEffect(() => {
		setText(expanded ? value : slicedText(value));
	}, [expanded]);

	const toggle = () => {
		setExpanded(!expanded);
	};

	return (
		<TaleItemWrapper lang={getLangAttr(language)}>
			<Markdown>{text}</Markdown>
			<button onClick={toggle}>
				<FormattedMessage id={`beverage.details.tale.${expanded ? 'readLess' : 'readMore'}`} />
			</button>
		</TaleItemWrapper>
	);
};

export default TaleItem;
