import React, { useMemo, useRef } from 'react';
import { useFrame, useLoader } from 'react-three-fiber';
import { LinearFilter, TextureLoader } from 'three';

import spinner from 'images/spinner.gif';

const Spinner: React.FC = () => {
	const mesh = useRef(null!);

	const texture = useLoader(TextureLoader, spinner)
	useMemo(() => (texture.minFilter = LinearFilter), [])
	useFrame(() => (mesh.current.rotation.z = mesh.current.rotation.z -= 0.02));

	return (
		<mesh scale={[40, 40, 1]} position={[190, 470, 1]} ref={mesh}>
			<boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
			<meshStandardMaterial attach="material" map={texture} />
		</mesh>
	);
}

export default Spinner;
