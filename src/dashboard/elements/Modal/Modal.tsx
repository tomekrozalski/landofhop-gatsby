import React, { useContext } from 'react';
import ReactDOM from 'react-dom';

import { Danger } from 'elements/icons';
import { NavigationContext } from 'dashboard/utils/contexts';
import { Subform as SubformEnum } from 'dashboard/utils/enums';
import { Subform as CountrySubform } from 'dashboard/BeverageData/fields/Country';
import { Subform as PlaceSubform } from 'dashboard/BeverageData/fields/Place';
import { Backdrop, CloseButton, Wrapper } from '.';

const Modal: React.FC = () => {
  const { setSubform, subform } = useContext(NavigationContext);
  const close = () => setSubform(null);

  const getContent = () => {
    switch (subform) {
      case SubformEnum.country:
        return <CountrySubform close={close} />;
      case SubformEnum.place:
        return <PlaceSubform close={close} />;
      default:
        return <div>Nothing</div>;
    }
  };

  return subform
    ? ReactDOM.createPortal(
        <Backdrop>
          <Wrapper>
            <CloseButton onClick={close}>
              <Danger />
            </CloseButton>
            {getContent()}
          </Wrapper>
        </Backdrop>,
        document.getElementById('modal-root')!,
      )
    : null;
};

export default Modal;
