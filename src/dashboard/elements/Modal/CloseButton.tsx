import styled from 'styled-components';

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  background-color: var(--color-black);
  border-radius: 50%;
  position: absolute;
  top: -2rem;
  right: -2rem;

  svg {
    width: 1.5rem;

    path {
      fill: var(--color-bright);
      transition: fill var(--transition-default);
    }
  }

  :hover svg path {
    fill: var(--color-white);
  }
`;

export default CloseButton;
