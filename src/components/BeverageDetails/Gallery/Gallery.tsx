import React from 'react';
import styled from 'styled-components';
import Img, { GatsbyImageProps } from 'gatsby-image';

import { BrokenContainer } from 'elements';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 22rem;
	height: 50rem;
`;

type Props = {
	galleryPhoto: {
		childImageSharp?: GatsbyImageProps
		publicURL: string
	}
}

const Gallery: React.FC<Props> = ({ galleryPhoto }) => (
	<Wrapper>
		{galleryPhoto.childImageSharp ? (
			<Img
				fixed={galleryPhoto.childImageSharp.fixed}
				alt=""
				imgStyle={{
					transition: 'var(--transition-default)',
				}}
			/>) : (
				<BrokenContainer
					src={galleryPhoto.publicURL}
					alt=""
				/>
			)}
	</Wrapper>
);

export default Gallery;
