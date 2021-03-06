import styled from 'styled-components';

const Title = styled.div<{ direction: 'left' | 'right' }>`
  display: flex;
  align-items: center;
  height: var(--size-input-height);
  padding: 0 1rem;
  color: var(--color-white);
  font-weight: var(--font-weight-light);
  position: absolute;
  top: 0;
  ${({ direction }) => direction}: var(--size-input-height);
  white-space: nowrap;
  pointer-events: none;
  transform: scaleX(0);
  transform-origin: top ${({ direction }) => direction};
  transition: transform var(--transition-default);
  z-index: 222;

  ::before {
    display: block;
    width: 100%;
    height: 100%;
    content: '';
    background-color: var(--color-black);

    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

export default Title;
