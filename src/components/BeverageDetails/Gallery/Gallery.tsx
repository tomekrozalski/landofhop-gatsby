import React, { useContext } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { useIntl } from 'gatsby-plugin-intl';

import { BeverageContext } from 'components/BeverageDetails';
import { BrokenContainer } from '.';

const Wrapper = styled.aside`
	grid-area: gallery;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 50rem;
`;

const Gallery: React.FC = () => {
	const { formatMessage } = useIntl();
	const { brand, galleryPhoto, name } = useContext(BeverageContext);

	return (
		<Wrapper>
			{galleryPhoto.childImageSharp ? (
				<Img
					fixed={galleryPhoto.childImageSharp.fixed}
					alt={`${name.value}, ${brand.name.value}`}
				/>) : (
					<BrokenContainer
						src={galleryPhoto.publicURL}
						alt={formatMessage({ id: 'errors.bevereageDetailsImageNotFound' })}
					/>
				)}
		</Wrapper>
	);
}

export default Gallery;
