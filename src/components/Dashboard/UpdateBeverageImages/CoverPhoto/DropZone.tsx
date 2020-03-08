import React, { useContext } from 'react';
import { useDropzone } from 'react-dropzone';

import { AuthenticationContext } from 'utils/contexts';
import { BeverageContext } from '../UpdateBeverageImages';
import { DragAndDropIcon } from '../elements';
import { DropZoneWrapper } from './elements';
import { config, File } from './utils';

type Props = {
	setErrors: (value: File[]) => void
}

const DropZone: React.FC<Props> = ({ setErrors }) => {
	const { token } = useContext(AuthenticationContext);
	const {
		badge,
		brand,
		id,
		shortId,
	} = useContext(BeverageContext);

	const onSaveImages = (file: {}) => {
		console.log('saveBeverageCover', file, token, badge,
			brand,
			id,
			shortId);

		// saveBeverageCover({
		// 	file: fileToRequest,
		// 	id,
		// 	params,
		// 	token,
		// })
		// 	.then(() => {
		// 		setFileToPreview(null);
		// 		setFileToRequest(null);
		// 		getBeveragesList();
		// 	});
	};

	const { getRootProps, getInputProps } = useDropzone({
		accept: config.accept,
		minSize: config.minSize * 1024,
		maxSize: config.maxSize * 1024,
		multiple: false,
		onDrop: (acceptedFiles, rejectedFiles) => {
			if (rejectedFiles.length) {
				setErrors(rejectedFiles);
			} else {
				setErrors([]);
				onSaveImages(acceptedFiles[0]);
			}
		},
	});

	return (
		<DropZoneWrapper {...getRootProps()}>
			<input {...getInputProps()} />
			<DragAndDropIcon />
		</DropZoneWrapper>
	);
}

export default DropZone;
