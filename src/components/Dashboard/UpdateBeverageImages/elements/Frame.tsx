import styled from 'styled-components';

const Frame = styled.div<{ active?: boolean }>`
	display: flex;
	align-items: flex-end;
	min-height: 508px;
	width: 100%;
	border: 4px ${({ active }) => (active ? 'dashed' : 'solid')} var(--color-brighter);
`;

export default Frame;
