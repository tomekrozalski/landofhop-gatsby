import styled from 'styled-components';

const CanvasWrapper = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: -180px;

	@media
		(-webkit-min-device-pixel-ratio: 2), 
		(min-resolution: 192dpi) { 
			width: 200%;
			height: 200%;

			canvas {
				transform: scale(.5, .5);
				transform-origin: top left;
			}
	}
`;

export default CanvasWrapper;
