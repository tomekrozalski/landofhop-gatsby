import React, { useContext, Suspense } from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import { Canvas } from 'react-three-fiber';

import { BeverageImageType } from 'utils/enums/beverage';
import { BeverageContext } from 'components/BeverageDetails';
import { CoverImage } from 'elements';

import {
	BrokenContainer,
	CanvasWrapper,
	GalleryContent,
	Wrapper,
} from '.';

const BigBox = () => (
	<div>div BOX BOX</div>
);

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
				<>
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
					<CanvasWrapper>
						<Canvas orthographic={true}>
							<Suspense fallback={BigBox}>
								<ambientLight />
								<GalleryContent
									badge={badge}
									brand={brand.badge}
									shortId={shortId}
									photos={photos.gallery}
								/>
							</Suspense>
						</Canvas>
					</CanvasWrapper>
				</>
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
