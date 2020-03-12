import React, { useContext, useEffect, useState } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { BeverageImageType } from 'utils/enums/beverage';
import { AuthenticationContext } from 'utils/contexts';
import { Button, CoverImage, SectionHeader } from 'elements';
import { BeverageContext } from '../UpdateBeverageImages';
import { Frame } from '../elements';
import { saveImagesBeverageGallery } from './utils';
import { Footer, SectionWrapper } from './elements';
import { DropZone, SavedFiles } from '.';

type Props = {
	updateValues: () => void
}

const Gallery: React.FC<Props> = ({ updateValues }) => {
	const { token } = useContext(AuthenticationContext);
	const {
		badge,
		brand,
		id,
		photos,
		shortId,
	} = useContext(BeverageContext);

	const [errors, setErrors] = useState<Blob[]>([]);
	const [files, setFiles] = useState<File[]>([]);
	const [savedFiles, setSavedFiles] = useState<string[]>([]);

	useEffect(() => {
		if (!photos?.gallery) {
			setSavedFiles([]);
		} else {
			setSavedFiles(
				new Array(photos.gallery).fill('').map((_, i) => {
					const validIndex = i + 1;
					return validIndex < 10 ? `0${validIndex}.jpg` : `${validIndex}.jpg`;
				}),
			);
		}
	}, [photos]);

	const onAdd = (e: React.MouseEvent) => {
		e.preventDefault();

		saveImagesBeverageGallery({
			badge,
			brand: brand.badge,
			files,
			id,
			shortId,
			token,
		})
			.then(() => {
				console.log('success');

				// updateOutline({
				// 	badge,
				// 	brand: brand.badge,
				// 	id,
				// 	shortId,
				// 	token,
				// 	updateValues,
				// });

				// setFiles([]);
			});
	}

	const onRemove = () => {
		setFiles([]);
	}

	return (
		<>
			<SectionHeader>
				<FormattedMessage id="dashboard.updateBeverageImages.gallery" />
			</SectionHeader>
			<SectionWrapper>
				<div>
					<Frame>
						{
							savedFiles.length ? (
								<CoverImage
									badge={badge}
									brand={{ badge: brand.badge, name: brand.name }}
									height={500}
									name={name}
									shortId={shortId}
									type={BeverageImageType.container}
									width={220}
								/>
							) : null
						}
						{
							files.length ? (
								<img alt="" src={URL.createObjectURL(files[0])} />
							) : null
						}
					</Frame>
				</div>
				<div>
					<Frame dangerouslySetInnerHTML={{
						__html: photos?.outlines?.gallery || '',
					}}>
					</Frame>
				</div>
				<Frame active gallery>
					{savedFiles.length
						? <SavedFiles files={savedFiles} />
						: (
							<DropZone
								files={files}
								setErrors={setErrors}
								setFiles={setFiles}
							/>
						)}
				</Frame>
			</SectionWrapper>
			<Footer>
				{errors.length ? <div>error</div> : null}
				<Button onClick={onRemove} type="reset" disabled={!files.length}>
					<FormattedMessage id="dashboard.updateBeverageImages.remove" />
				</Button>
				<Button onClick={onAdd} type="submit" disabled={!files.length}>
					<FormattedMessage id="dashboard.updateBeverageImages.add" />
				</Button>
			</Footer>
		</>
	);
}

export default Gallery;
