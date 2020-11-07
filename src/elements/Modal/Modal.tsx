import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Danger } from 'elements/icons';
import Backdrop from './Backdrop';
import CloseButton from './CloseButton';
import Wrapper from './Wrapper';

type Props = {
  close: () => void;
  isVisible: boolean;
};

const Modal: React.FC<Props> = ({ children, close, isVisible }) => {
  useEffect(() => {
    const classList = document?.querySelector('body')?.classList;

    if (classList) {
      if (isVisible) {
        classList.add('scroll-lock');
      } else {
        classList.remove('scroll-lock');
      }
    }
  }, [isVisible]);

  return isVisible
    ? createPortal(
        <Backdrop>
          <Wrapper>
            <CloseButton onClick={close}>
              <Danger />
            </CloseButton>
            {children}
          </Wrapper>
        </Backdrop>,
        document.getElementById('modal-root')!,
      )
    : null;
};

export default Modal;
