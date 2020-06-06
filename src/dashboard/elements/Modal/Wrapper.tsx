import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  width: var(--size-container-max-width);
  min-height: 400px;
  padding: 2rem;
  background-color: var(--color-white);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: var(--index-modal);
`;

export default Wrapper;
