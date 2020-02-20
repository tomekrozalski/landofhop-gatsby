import React, { useContext, useState, useRef, useMemo, useEffect, Suspense } from 'react';
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


const Image = ({ img, number }) => {
	console.log('--h', img, number);

	const textureUrl = `https://land-of-hop-images.s3.eu-central-1.amazonaws.com/browar-pinta/the-big-pig/d6uj6o/container/jpg/2x/${number}.jpg`;
	const texture = useLoader(TextureLoader, textureUrl);
	useMemo(() => (texture.minFilter = LinearFilter), []);

	return (
		<mesh visible={img === number}>
			<planeBufferGeometry attach="geometry" />
			<meshStandardMaterial attach="material" map={texture} />
		</mesh>
	)
}

const GalleryContent = ({ badge, brand, shortId, photos }) => {
	const { viewport } = useThree();

	const [rotatable, setRotatable] = useState(false);
	const [position, setPosition] = useState([0, 0]);
	const [img, setImg] = useState('01');

	useEffect(() => {
		if (position[0] !== position[1]) {

			const abs = +img - 1;
			const parsed = position[0] < position[1] ? +abs - 1 : +abs + 1;
			const aaa = parsed % 24;

			let bbb = 0;

			if (aaa < 0) {
				bbb = 23 + aaa;
			} else {
				bbb = aaa;
			}

			const ccc = bbb + 1;
			const normalized = ccc < 10 ? `0${ccc}` : ccc.toString();

			setImg(normalized);
		}
	}, [position]);

	const onMove = (e) => {
		if (rotatable) {
			setPosition(val => [e.clientX, val[0]])
		}
	}

	const onWheelMove = (e) => {
		console.log('e.clientY', e.deltaX, e.deltaY);

		setPosition(val => [e.deltaX, val[0]])

	}

	const photosArr = useMemo(() => {
		return new Array(photos).fill('').map((val, i) => {
			const index = i + 1;

			return index < 10 ? `0${index}` : index.toString();
		})
	}, []);


	return (
		<mesh
			scale={[viewport.width, viewport.height, 1]}
			onPointerUp={() => setRotatable(false)}
			onPointerDown={() => setRotatable(true)}
			onPointerOver={() => setRotatable(false)}
			onPointerMove={onMove}
			onWheel={onWheelMove}
		>
			<planeBufferGeometry attach="geometry" />
			{photosArr.map(val => <Image key={val} img={img} number={val} />)}
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
					<Suspense fallback={'Loading'}>
						<ambientLight />
						<GalleryContent badge="the-big-pig" shortId="d6uj6o" brand="browar-pinta" photos={24} />
					</Suspense>
				</Canvas>
			</div>
		</Wrapper>
	);
}

export default Gallery;
