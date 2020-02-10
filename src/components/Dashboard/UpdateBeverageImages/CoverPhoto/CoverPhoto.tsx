import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { AuthenticationContext } from 'utils/contexts';
import {
	BeverageBase as BeverageBaseTypes,
	BeverageBasicsTranslated as BeverageBasicsTranslatedTypes,
} from 'utils/types';
import { Image } from 'components/Tiles';
import { DragableArea, SectionHeader } from '../elements';
import { Navigation } from '.';

const ContentWrapper = styled.div`
	display: flex;
	align-items: flex-start;
`;

const Frame = styled.div<{ active?: boolean }>`
	display: flex;
	align-items: flex-end;
	min-height: 508px;
	width: 228px;
	border: 4px ${({ active }) => (active ? 'dashed' : 'solid')} var(--color-brighter);

	& + & {
		margin-left: 2rem;
	}
`;

type Props = BeverageBasicsTranslatedTypes & {
	next: BeverageBaseTypes
	previous: BeverageBaseTypes
};

const CoverPhoto: React.FC<Props> = (props) => {
	const { token } = useContext(AuthenticationContext);
	const [theSvg, setTheSvg] = useState('');

	const { badge, brand, next, previous, shortId } = props;
	const api = `${process.env.API_SERVER}/beverage/create-traced-svgs`;
	const apiWithParams = `${api}/${shortId}/${brand.badge}/${badge}/666`;

	useEffect(() => {
		fetch(apiWithParams, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
			.then(r => r.text())
			.then(setTheSvg);
	}, []);

	return (
		<>
			<SectionHeader>
				<FormattedMessage id="dashboard.updateBeverageImages.coverPhoto" />
			</SectionHeader>
			<ContentWrapper>
				<Frame>
					<Image {...props} />
				</Frame>
				<Frame dangerouslySetInnerHTML={{
					__html: theSvg,
				}}>
				</Frame>
				<Frame active>
					<DragableArea />
				</Frame>
				<Navigation
					current={{ badge, brand, shortId }}
					next={next}
					previous={previous}
				/>
			</ContentWrapper>
		</>
	);
}

export default CoverPhoto;
