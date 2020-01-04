import React, { useContext } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import { BrokenContainer } from 'elements';
import { BeverageContext } from 'components/BeverageDetails';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 22rem;
	height: 50rem;
`;

const Gallery: React.FC = () => {
	const { galleryPhoto } = useContext(BeverageContext);

	return (
		<Wrapper>
			{galleryPhoto.childImageSharp ? (
				<Img
					fixed={galleryPhoto.childImageSharp.fixed}
					alt=""
				/>) : (
					<BrokenContainer
						src={galleryPhoto.publicURL}
						alt=""
					/>
				)}
		</Wrapper>
	);
}

export default Gallery;
