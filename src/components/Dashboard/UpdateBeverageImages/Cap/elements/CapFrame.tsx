import styled from 'styled-components';

const CapFrame = styled.div<{ active?: boolean; gallery?: boolean }>`
  display: flex;
  align-items: ${({ gallery }) => (gallery ? 'flex-start' : 'flex-end')};
  width: 100%;
  border: 4px ${({ active }) => (active ? 'dashed' : 'solid')}
    var(--color-brighter);
`;

export default CapFrame;
