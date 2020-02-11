import React, { useContext } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { AuthenticationContext } from 'utils/contexts';
import { BeverageBase as BeverageBaseTypes } from 'utils/types';
import { BeverageImageType } from 'utils/enums/beverage';
import { CoverImage } from 'elements';
import { TranslatedBeverage as TranslatedBeverageTypes } from '../utils/types';
import {
	DragableArea,
	Frame,
	SectionHeader,
	SectionWrapper,
} from '../elements';
import { Navigation } from '.';

type Props = TranslatedBeverageTypes & {
	next: BeverageBaseTypes
	previous: BeverageBaseTypes
};

const CoverPhoto: React.FC<Props> = (props) => {
	console.log('props', props);

	const { token } = useContext(AuthenticationContext);

	const {
		badge,
		brand,
		next,
		photos,
		previous,
		shortId,
	} = props;

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
					<DragableArea />
				</Frame>
				<Navigation
					current={{ badge, brand, shortId }}
					next={next}
					previous={previous}
				/>
			</SectionWrapper>
		</>
	);
}

export default CoverPhoto;
