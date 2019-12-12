import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
	display: flex;
	justify-content: center;
	border: 1px dotted #ddd;
	padding: 1rem;
	background-color: #eee;
	text-align: center;
`;

const Item = styled.li`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 5rem;
	height: 5rem;
	margin: 1rem;
	border-radius: 50%;
	background-color: #ddd;
	color: #999;
`;

const Aside: React.FC = () => (
	<List>
		<Item>←</Item>
		<Item>→</Item>
	</List>
);

export default Aside;
