import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	border: 1px dotted #ddd;
	padding: 1rem;
	background-color: #eee;
	text-align: center;
`;

const Gallery: React.FC = () => (
	<Wrapper>
		img
	</Wrapper>
);

export default Gallery;
