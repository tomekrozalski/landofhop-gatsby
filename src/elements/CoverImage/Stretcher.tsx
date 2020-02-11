import React from 'react';
import styled from 'styled-components';

import { BeverageImageType } from 'utils/enums/beverage';

const Wrapper = styled.div<{ ratio: number, type: BeverageImageType }>`
	width: 100%;
	padding-bottom: ${({ ratio, type }) => (type === BeverageImageType.container
		? `227.28`
		: ratio
	)}%;
`;

type Props = {
	height?: number
	type: BeverageImageType
	width?: number
}

const Stretcher: React.FC<Props> = ({ height = 100, type, width = 100 }) =>
	<Wrapper ratio={(height / width) * 100} type={type} />

export default Stretcher;
