import React, { useMemo, useState } from 'react';
import { LinearFilter, TextureLoader } from 'three';
import { useLoader, useThree } from 'react-three-fiber';

type Props = {
	badge: string
	brand: string
	photos: number
	shortId: string
}

const GalleryContent: React.FC<Props> = ({
	badge,
	brand,
	shortId,
	photos,
}) => {
	const { viewport } = useThree();

	const galleryPath = useMemo(() => {
		const basicPath = `${process.env.PHOTO_SERVER}/${brand}/${badge}/${shortId}/container`;
		const specificPath = (window.devicePixelRatio && window.devicePixelRatio >= 2)
			? `${basicPath}/jpg/2x`
			: `${basicPath}/jpg/1x`;

		return specificPath;
	}, []);

	const textureLinks = useMemo(() => {
		return new Array(photos).fill('').map((_, i) => {
			const index = i + 1;
			return index < 10 ? `${galleryPath}/0${index}.jpg` : `${galleryPath}/${index}.jpg`;
		})
	}, []);

	const rawTextures = useLoader(TextureLoader, textureLinks);
	const textures = useMemo(
		() => rawTextures
			.map((texture: any) => ((texture.minFilter = LinearFilter), texture)),
		[rawTextures]
	);

	// const [rotatable, setRotatable] = useState(false);
	// const [position, setPosition] = useState([0, 0]);
	const [img, setImg] = useState(0);
	const [part, setPart] = useState(0);

	// useEffect(() => {
	// 	if (position[0] !== position[1]) {

	// 		const abs = +img - 1;
	// 		const parsed = position[0] < position[1] ? +abs - 1 : +abs + 1;
	// 		const aaa = parsed % 24;

	// 		let bbb = 0;

	// 		if (aaa < 0) {
	// 			bbb = 23 + aaa;
	// 		} else {
	// 			bbb = aaa;
	// 		}

	// 		const ccc = bbb + 1;
	// 		const normalized = ccc < 10 ? `0${ccc}` : ccc.toString();

	// 		setImg(normalized);
	// 	}
	// }, [position]);

	// const onMove = (e) => {
	// 	if (rotatable) {
	// 		setPosition(val => [e.clientX, val[0]])
	// 	}
	// }

	// const onWheelMove = (e) => {
	// 	console.log('e.clientY', e.deltaX, e.deltaY);

	// 	setPosition(val => [e.deltaX, val[0]])

	// }

	return (
		<mesh
			scale={[viewport.width, viewport.height, 1]}
		// onPointerUp={() => setRotatable(false)}
		// onPointerDown={() => setRotatable(true)}
		// onPointerOver={() => setRotatable(false)}
		// onPointerMove={onMove}
		// onWheel={onWheelMove}
		>
			<planeBufferGeometry attach="geometry" />
			<meshStandardMaterial attach="material" map={textures[img]} />
		</mesh>
	)
}

export default GalleryContent;
