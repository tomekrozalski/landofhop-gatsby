import React from 'react';
import styled from 'styled-components';
import Img, { GatsbyImageProps } from 'gatsby-image';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;

`;

type Props = {
	galleryPhoto: {
		childImageSharp?: GatsbyImageProps
		publicURL: string
	}
}

const Gallery: React.FC<Props> = ({ galleryPhoto }) => {
	console.log('--')

	return galleryPhoto.childImageSharp ? (
		<Wrapper>
			<Img
				fixed={galleryPhoto.childImageSharp.fixed}
				alt=""
				imgStyle={{
					transition: 'var(--transition-default)',
				}}
			/>
		</Wrapper>
	) : (
			<Wrapper>Broken</Wrapper>
		);
}

export default Gallery;
