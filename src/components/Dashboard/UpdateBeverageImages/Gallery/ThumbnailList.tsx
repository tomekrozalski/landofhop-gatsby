import React from 'react';

import { ThumbnailListWrapper } from './elements';
import { ThumbnailItem } from '.';

type Props = {
	files: File[]
}

const ThumbnailList: React.FC<Props> = ({ files }) => (
	<ThumbnailListWrapper>
		{files.map(file => (
			<ThumbnailItem
				name={file.name.substr(0, file.name.lastIndexOf('.')) || file.name}
				src={URL.createObjectURL(file)}
			/>
		))}
	</ThumbnailListWrapper>
);

export default ThumbnailList;
