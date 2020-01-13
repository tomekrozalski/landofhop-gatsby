import React from 'react';
import styled from 'styled-components';

import { DataLanguage } from 'utils/enums';

export const SourceGroup = styled.span`
	font: var(--font-weight-light) 1.6rem / 2.2rem var(--font-primary);

	> span + span {
		&::before {
			content: ' / '
		}
	}
`;

const GeneralWrapper = styled.span`
	background-position: 0 0.8em;
	background-repeat: repeat-x;
`;

const LabelWrapper = styled.span``;

const ProducerWrapper = styled(GeneralWrapper)`
	background-image: linear-gradient(#ffe6ea, #ffe6ea);
`;

const EditorialWrapper = styled(GeneralWrapper)`
	background-image: linear-gradient(#c1d5f8, #c1d5f8);
`;

export const Label: React.FC = ({ children }) => (
	<span>
		<LabelWrapper>
			{children}
		</LabelWrapper>
	</span>
);

export const Producer: React.FC = ({ children }) => (
	<span>
		<ProducerWrapper>
			{children}
		</ProducerWrapper>
	</span>
);

export const Editorial: React.FC = ({ children }) => (
	<span>
		<EditorialWrapper>
			{children}
		</EditorialWrapper>
	</span>
);

export const SourceItem: React.FC<{ lang?: DataLanguage }> = ({ children, lang }) => (
	<em lang={lang}>
		{children}
	</em>
);
