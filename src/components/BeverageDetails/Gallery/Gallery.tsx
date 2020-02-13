import React, { useContext } from 'react';
import styled from 'styled-components';
import { useIntl } from 'gatsby-plugin-intl';

import { BeverageImageType } from 'utils/enums/beverage';
import { BeverageContext } from 'components/BeverageDetails';
import { CoverImage } from 'elements';
import { BrokenContainer } from '.';

const Wrapper = styled.aside`
	grid-area: gallery;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 220px;
	margin: 0 auto;
`;

const Gallery: React.FC = () => {
	const { formatMessage } = useIntl();
	const {
		badge,
		brand,
		container,
		name,
		photos,
		shortId,
	} = useContext(BeverageContext);

	return (
		<Wrapper>
			{photos && photos.gallery ? (
				<CoverImage
					badge={badge}
					brand={{ badge: brand.badge, name: brand.name }}
					height={500}
					name={name}
					outline={photos.outlines?.gallery}
					shortId={shortId}
					type={BeverageImageType.container}
					width={220}
				/>
			) : (
					<BrokenContainer
						src={`${process.env.PHOTO_SERVER}/broken-${container.type}.svg`}
						alt={formatMessage({ id: 'errors.bevereageDetailsImageNotFound' })}
					/>
				)}
		</Wrapper>
	);
}

export default Gallery;
