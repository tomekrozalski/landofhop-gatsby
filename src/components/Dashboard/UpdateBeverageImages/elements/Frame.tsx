import styled from 'styled-components';

const Frame = styled.div<{ active?: boolean }>`
	display: flex;
	align-items: flex-end;
	min-height: 508px;
	width: 228px;
	border: 4px ${({ active }) => (active ? 'dashed' : 'solid')} var(--color-brighter);

	& + & {
		margin-left: 2rem;
	}
`;

export default Frame;
