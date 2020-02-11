import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { BeverageBase as BeverageBaseTypes } from 'utils/types';
import { BeverageImageType } from 'utils/enums/beverage';
import { CoverImage } from 'elements';
import { TranslatedBeverage as TranslatedBeverageTypes } from '../utils/types';
import { Frame, SectionHeader, SectionWrapper } from '../elements';

type Props = TranslatedBeverageTypes & {
	next: BeverageBaseTypes
	previous: BeverageBaseTypes
};

const Gallery: React.FC<Props> = ({ badge, brand, photos, shortId }) => {
	console.log('gallery');

	return (
		<>
			<SectionHeader>
				<FormattedMessage id="dashboard.updateBeverageImages.gallery" />
			</SectionHeader>
			<SectionWrapper>
				<Frame>
					{
						photos?.gallery && (
							<CoverImage
								badge={badge}
								brand={{ badge: brand.badge, name: brand.name }}
								height={photos?.cover?.height}
								name={name}
								shortId={shortId}
								type={BeverageImageType.container}
								width={photos?.cover?.width}
							/>
						)
					}
				</Frame>
				<Frame dangerouslySetInnerHTML={{
					__html: photos?.outlines?.gallery || '',
				}}>
				</Frame>
			</SectionWrapper>
		</>
	);
}

export default Gallery;
