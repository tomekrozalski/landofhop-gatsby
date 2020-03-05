import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDropzone } from 'react-dropzone';

import { DragAndDropIcon } from '../elements';
import { Preview } from '.';

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	min-height: 500px;
	position: relative;
	cursor: pointer;

	svg {
		height: 140px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 2;

		.dark {
			fill: var(--color-bright);
			transition: fill var(--transition-default);
		}

		.movable {
			transition: transform .2s;
		}
	}

	:hover,
	:focus {
		outline: none;

		svg {
			.dark {
				fill: var(--color-dark);
			}

			.movable {
				transform: translate(224px, -104px);
			}
		}
	}
`;

type Props = {
	setErrors: ([]) => {}
}

const DropZone: React.FC<Props> = ({ setErrors }) => {
	const [fileToPreview, setFileToPreview] = useState<any | null>(null);
	const [fileToRequest, setFileToRequest] = useState<{} | null>(null);

	const { getRootProps, getInputProps } = useDropzone({
		accept: ['image/jpg', 'image/jpeg'],
		minSize: 50 * 1024,
		maxSize: 800 * 1024,
		multiple: false,
		onDrop: (acceptedFiles, rejectedFiles) => {
			console.log('acceptedFiles, rejectedFiles', acceptedFiles, rejectedFiles);
			if (rejectedFiles.length) {
				setErrors(rejectedFiles.map(({ name, size, type }) => ({
					name, size, type,
				})));
			} else {
				setErrors([]);

				setFileToRequest(acceptedFiles[0]);
				setFileToPreview({ ...acceptedFiles[0], preview: URL.createObjectURL(acceptedFiles[0]) });
			}
		},
	});

	useEffect(() => () => {
		if (fileToPreview) {
			URL.revokeObjectURL(fileToPreview.preview);
		}
	}, [fileToPreview]);

	// const onSaveImages = (e) => {
	// 	e.preventDefault();

	// 	console.log('saveBeverageCover');

	// 	saveBeverageCover({
	// 		file: fileToRequest,
	// 		id,
	// 		params,
	// 		token,
	// 	})
	// 		.then(() => {
	// 			setFileToPreview(null);
	// 			setFileToRequest(null);
	// 			getBeveragesList();
	// 		});
	// };

	return (
		<Wrapper {...getRootProps()}>
			<input {...getInputProps()} />
			<DragAndDropIcon />
			{fileToPreview && <Preview file={fileToPreview} />}
		</Wrapper>
	);
}

export default DropZone;
