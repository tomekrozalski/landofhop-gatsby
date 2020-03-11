import React, { useContext, useState } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { BeverageImageType } from 'utils/enums/beverage';
import { AuthenticationContext } from 'utils/contexts';
import { Button, CoverImage, SectionHeader } from 'elements';
import { BeverageContext } from '../UpdateBeverageImages';
import { Frame } from '../elements';
import { Footer, SectionWrapper } from './elements';

import { DropZone } from '.';

type Props = {
	updateValues: () => void
}

const Gallery: React.FC<Props> = ({ updateValues }) => {
	const { token } = useContext(AuthenticationContext);
	const {
		badge,
		brand,
		photos,
		shortId,
	} = useContext(BeverageContext);
	const [errors, setErrors] = useState<Blob[]>([]);
	const [files, setFiles] = useState<File[]>([]);

	// const onSaveImages = (file: Blob) => {
	// 	saveBeverageCover({
	// 		badge,
	// 		brand: brand.badge,
	// 		file,
	// 		id,
	// 		shortId,
	// 		token,
	// 	})
	// 		.then(() => {
	// 			updateOutline({
	// 				badge,
	// 				brand: brand.badge,
	// 				id,
	// 				shortId,
	// 				token,
	// 				updateValues,
	// 			});
	// 		});
	// };

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
					<DropZone
						files={files}
						setErrors={setErrors}
						setFiles={setFiles}
					/>
				</Frame>
			</SectionWrapper>
			<Footer>
				<Button onClick={() => setFiles([])}>Usuń</Button>
				<Button onClick={() => setFiles([])}>Dodaj</Button>
			</Footer>
		</>
	);
}

export default Gallery;
