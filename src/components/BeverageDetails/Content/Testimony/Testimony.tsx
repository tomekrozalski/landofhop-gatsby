import React from 'react';
import styled from 'styled-components';

const TestimonyWrapper = styled.section`
	grid-area: testimony;
	margin: 1rem 0;
`;

const Testimony: React.FC = () => (
	<TestimonyWrapper>
		Testimony
	</TestimonyWrapper>
);

export default Testimony;
