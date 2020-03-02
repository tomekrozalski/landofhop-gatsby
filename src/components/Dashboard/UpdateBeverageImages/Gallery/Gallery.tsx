import React, { useContext } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { BeverageImageType } from 'utils/enums/beverage';
import { CoverImage, SectionHeader } from 'elements';
import { BeverageContext } from '../UpdateBeverageImages';
import { Frame, SectionWrapper } from '../elements';

const Gallery: React.FC = () => {
	const {
		badge,
		brand,
		photos,
		shortId,
	} = useContext(BeverageContext);

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
