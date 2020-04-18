import styled from 'styled-components';

const RemoveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  overflow: hidden;
  background-color: var(--color-danger-light);
  transition: background-color var(--transition-default);
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-40%, -40%);

  :hover {
    background-color: var(--color-danger-strong);
  }

  svg {
    width: 1.5rem;

    path {
      fill: #fff;
    }
  }
`;

export default RemoveButton;
