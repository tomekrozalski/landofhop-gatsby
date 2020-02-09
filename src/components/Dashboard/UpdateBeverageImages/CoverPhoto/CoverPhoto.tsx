import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { AuthenticationContext } from 'utils/contexts';
import { Image } from 'components/Tiles';

import { BeverageBasicsTranslated as BeverageBasicsTranslatedTypes } from 'utils/types';

const Abd = styled.div`
	grid-area: aaa;
	height: 500px;
	width: 220px;
`;

const ImageWrapper = styled.div`
	grid-area: bbb;
	height: 500px;
	width: 220px;
	position: relative;

	svg {
		width: 100%;
		height: 100%;
	}
`;

const CoverPhoto: React.FC<BeverageBasicsTranslatedTypes> = (props) => {
	const { token } = useContext(AuthenticationContext);
	const [theSvg, setTheSvg] = useState('');

	const { badge, brand, shortId } = props;
	const api = `${process.env.API_SERVER}/beverage/create-traced-svgs`;
	const apiWithParams = `${api}/${shortId}/${brand.badge}/${badge}/666`;

	const getSvg = () => {
		fetch(apiWithParams, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
			.then(r => r.text())
			.then(res => {
				console.log('res', res);
				setTheSvg(res);
			});
	}

	return (
		<>
			<div>CoverPhoto</div>
			<Abd>
				<Image {...props} />
			</Abd>
			<ImageWrapper>
				{<div dangerouslySetInnerHTML={{
					__html: theSvg,
				}} />}
			</ImageWrapper>
			<button onClick={getSvg}>get svg</button>
		</>
	);
}

export default CoverPhoto;
