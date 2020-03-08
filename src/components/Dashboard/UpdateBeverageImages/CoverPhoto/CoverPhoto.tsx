import React, { useContext, useState } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { BeverageBase as BeverageBaseTypes } from 'utils/types';
import { BeverageImageType } from 'utils/enums/beverage';
import { CoverImage, SectionHeader } from 'elements';
import { BeverageContext } from '../UpdateBeverageImages';
import { Frame, SectionWrapper } from '../elements';
import { Aside } from './elements';
import { File } from './utils';
import { DropZone, Error, Navigation } from '.';

type Props = {
	next: BeverageBaseTypes
	previous: BeverageBaseTypes
};

const CoverPhoto: React.FC<Props> = ({ next, previous }) => {
	const [errors, setErrors] = useState<File[]>([]);

	const {
		badge,
		brand,
		photos,
		shortId,
	} = useContext(BeverageContext);

	return (
		<>
			<SectionHeader>
				<FormattedMessage id="dashboard.updateBeverageImages.coverPhoto" />
			</SectionHeader>
			<SectionWrapper>
				<Frame>
					{
						photos?.cover && (
							<CoverImage
								badge={badge}
								brand={{ badge: brand.badge, name: brand.name }}
								height={photos?.cover?.height}
								name={name}
								outline={photos?.outlines?.cover}
								shortId={shortId}
								type={BeverageImageType.cover}
								width={photos?.cover?.width}
							/>
						)
					}
				</Frame>
				<Frame dangerouslySetInnerHTML={{
					__html: photos?.outlines?.cover || '',
				}}>
				</Frame>
				<Frame active>
					<DropZone setErrors={setErrors} />
				</Frame>
				<Aside>
					<Navigation
						current={{ badge, brand, shortId }}
						next={next}
						previous={previous}
					/>
					{errors.length ? <Error {...errors[0]} /> : null}
				</Aside>
			</SectionWrapper>
		</>
	);
}

export default CoverPhoto;
