import React, { useContext, useState } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { BeverageImageType } from 'utils/enums/beverage';
import { CoverImage, SectionHeader } from 'elements';
import { BeverageContext } from '../UpdateBeverageImages';
import { Frame } from '../elements';
import { SectionWrapper } from './elements';
import { DropZone } from '.';

type Props = {
	updateValues: () => void
}

const Gallery: React.FC<Props> = ({ updateValues }) => {
	const {
		badge,
		brand,
		photos,
		shortId,
	} = useContext(BeverageContext);
	const [errors, setErrors] = useState<Blob[]>([]);

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
				<Frame active>
					<DropZone setErrors={setErrors} updateValues={updateValues} />
				</Frame>
			</SectionWrapper>
		</>
	);
}

export default Gallery;
