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
	position: relative;

	::after {
		display: inline-block;
		width: 100%;
		height: 60%;
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		z-index: -1;
		opacity: .4;
	}
`;

const LabelWrapper = styled.span``;

const ProducerWrapper = styled(GeneralWrapper)`
	::after {
		background-color: pink;
	}
`;

const EditorialWrapper = styled(GeneralWrapper)`
	::after {
		background-color: cornflowerblue;
	}
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
