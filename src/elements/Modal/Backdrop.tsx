import styled from 'styled-components';

const Backdrop = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--index-backdrop);
`;

export default Backdrop;
