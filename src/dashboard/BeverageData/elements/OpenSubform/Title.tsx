import styled from 'styled-components';

const Title = styled.div`
  display: flex;
  align-items: center;
  height: var(--size-input-height);
  padding: 0 1rem;
  color: var(--color-white);
  font-weight: var(--font-weight-light);
  position: absolute;
  top: 0;
  left: var(--size-input-height);
  white-space: nowrap;
  pointer-events: none;

  ::before {
    display: block;
    width: 100%;
    height: 100%;
    content: '';
    background-color: var(--color-black);
    transform: scaleX(0);
    transform-origin: top left;
    transition: transform var(--transition-default);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

export default Title;
