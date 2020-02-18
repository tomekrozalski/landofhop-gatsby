import React, { useContext, useState, useRef, useMemo, Suspense } from 'react';
import styled from 'styled-components';
import { useIntl } from 'gatsby-plugin-intl';
import { LinearFilter, TextureLoader } from 'three';
import { Canvas, useFrame, useLoader, useThree } from 'react-three-fiber';

import { BeverageImageType } from 'utils/enums/beverage';
import { BeverageContext } from 'components/BeverageDetails';
import { CoverImage } from 'elements';

import { BrokenContainer } from '.';

const Wrapper = styled.aside`
	grid-area: gallery;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 220px;
	margin: 0 auto;
	position: relative;
`;

const Box = () => {
	const { viewport, aspect } = useThree();

	console.log('-->', viewport, aspect);

	// This reference will give us direct access to the mesh
	const mesh = useRef()

	// Set up state for the hovered and active state
	const [hovered, setHover] = useState(false)
	const [active, setActive] = useState(false)

	// Rotate mesh every frame, this is outside of React without overhead
	useFrame(() => (mesh.current.rotation.z += 0.02))

	const textureUrl = 'https://land-of-hop-images.s3.eu-central-1.amazonaws.com/browar-pinta/the-big-pig/d6uj6o/container/jpg/2x/01.jpg';
	const texture = useLoader(TextureLoader, textureUrl);
	useMemo(() => (texture.minFilter = LinearFilter), []);

	return (
		<mesh
			ref={mesh}
			scale={[viewport.width, viewport.height, 1]}
		>

			<planeBufferGeometry attach="geometry" />
			<meshStandardMaterial attach="material" map={texture} depthTest={false} />
		</mesh>
	)
}

const Gallery: React.FC = () => {
	const { formatMessage } = useIntl();
	const {
		badge,
		brand,
		container,
		name,
		photos,
		shortId,
	} = useContext(BeverageContext);

	return (
		<Wrapper>
			{photos && photos.gallery ? (
				<CoverImage
					badge={badge}
					brand={{ badge: brand.badge, name: brand.name }}
					height={500}
					name={name}
					outline={photos.outlines?.gallery}
					shortId={shortId}
					type={BeverageImageType.container}
					width={220}
				/>
			) : (
					<BrokenContainer
						src={`${process.env.PHOTO_SERVER}/broken-${container.type}.svg`}
						alt={formatMessage({ id: 'errors.bevereageDetailsImageNotFound' })}
					/>
				)}
			<div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: -240, zIndex: 2 }}>
				<Canvas orthographic={true}>
					<Suspense fallback={() => <div>Load</div>}>
						<ambientLight />
						<Box />
					</Suspense>
				</Canvas>
			</div>

		</Wrapper>
	);
}

export default Gallery;
