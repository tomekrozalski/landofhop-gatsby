import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

const Rectangle = styled.rect`
	fill: steelblue;
	fill-opacity: .8;
	stroke: steelblue;
	stroke-width: 1.5px;
	cursor: pointer;
`;

const Text = styled.text`
    fill: var(--color-black);
    font-family: var(--font-primary);
		font-size: 1.4rem;
		text-transform: uppercase;
		position: absolute;

		transition: opacity .2s;
`;

const Back = styled.rect`
	transition: opacity .2s;
`

type Props = {
	beverages: number
	height: number
	value: number
	x: number
	y: number
}

const DataPoint: React.FC<Props> = ({ beverages, height, value, x, y }) => {
	const [opacity, setOpacity] = useState(1);
	const [textWidth, setTextWidth] = useState(0);
	const thetext = useRef(null!);

	useEffect(() => {
		console.log('thetext.current.getBBox()', thetext.current.getBBox());

		setTextWidth(thetext.current.getBBox().width)
	}, []);

	const abc = () => {
		setOpacity(1);
	}

	const out = () => {
		setOpacity(0);
	}

	console.log('render');

	return (
		<>
			<Rectangle x={x - 1} y={y} width="3.5" height={height - y} onMouseOver={abc} onMouseLeave={out} />

			<Back width={textWidth} height={20} fill="green" x={x + 5} y={y - 25} style={{ opacity }} />
			<Text style={{ opacity }} ref={thetext} x={x + 10} y={y - 10}>{`${value}%: ${beverages}`}</Text>

		</>
	);
}

export default DataPoint;
