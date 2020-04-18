import styled from 'styled-components';

const CapFrame = styled.div<{ active?: boolean }>`
  width: 100%;
  border: 4px ${({ active }) => (active ? 'dashed' : 'solid')}
    var(--color-brighter);
  position: relative;
`;

export default CapFrame;
