import React, { useContext, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import { AuthenticationContext } from 'utils/contexts';
import { BeverageContext } from '../UpdateBeverageImages';
import { DragAndDropIcon, DropZoneWrapper } from '../elements';
import { config } from './utils';
import { Thumbnails } from '.';

type Props = {
	setErrors: (value: Blob[]) => void
	updateValues: () => void
}

const DropZone: React.FC<Props> = ({ setErrors, updateValues }) => {
	const { token } = useContext(AuthenticationContext);
	const {
		badge,
		brand,
		id,
		shortId,
	} = useContext(BeverageContext);

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

	const { getRootProps, getInputProps } = useDropzone({
		accept: config.accept,
		minSize: config.minSize * 1024,
		maxSize: config.maxSize * 1024,
		multiple: true,
		onDrop: (acceptedFiles, rejectedFiles) => {
			if (rejectedFiles.length) {
				setErrors(rejectedFiles);
			} else {
				setErrors([]);
				setFiles(acceptedFiles);
			}
		},
	});

	return (
		<DropZoneWrapper {...getRootProps()}>
			<input {...getInputProps()} />
			{files.length
				? <Thumbnails files={files} />
				: <DragAndDropIcon />
			}
		</DropZoneWrapper>
	);
}

export default DropZone;
