import React, { useMemo } from 'react';
import { useLoader } from 'react-three-fiber';
import { LinearFilter, TextureLoader } from 'three';

import spinner from 'images/icon360.gif';

const Icon360: React.FC = () => {
	const texture = useLoader(TextureLoader, spinner)
	useMemo(() => (texture.minFilter = LinearFilter), [])

	return (
		<mesh scale={[70, 40, 1]} position={[170, 470, 1]}>
			<planeBufferGeometry attach="geometry" />
			<meshStandardMaterial attach="material" map={texture} />
		</mesh>
	);
}

export default Icon360;
