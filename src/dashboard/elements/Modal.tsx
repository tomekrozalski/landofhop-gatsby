import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { Danger } from 'elements/icons';

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

type Props = {
  close: () => void;
};

const Modal: React.FC<Props> = ({ children, close }) =>
  ReactDOM.createPortal(
    <Backdrop>
      <Wrapper>
        <CloseButton onClick={close}>
          <Danger />
        </CloseButton>
        {children}
      </Wrapper>
    </Backdrop>,
    document.getElementById('modal-root')!,
  );

export default Modal;
