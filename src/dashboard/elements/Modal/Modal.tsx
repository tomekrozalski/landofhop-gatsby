import React, { useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { Danger } from 'elements/icons';
import { NavigationContext } from 'dashboard/utils/contexts';
import { Subform as SubformEnum } from 'dashboard/utils/enums';
import { Subform as CountrySubform } from 'dashboard/BeverageData/fields/Country';
import { Subform as IngredientSubform } from 'dashboard/BeverageData/fields/IngredientsList';
import { Subform as InstitutionSubform } from 'dashboard/BeverageData/fields/Brand';
import LanguageSubform from 'dashboard/BeverageData/elements/Navigation/Aside/Language';
import { Subform as PlaceSubform } from 'dashboard/BeverageData/fields/Place';
import { Backdrop, CloseButton, Wrapper } from '.';

const Modal: React.FC = () => {
  const { setSubform, subform } = useContext(NavigationContext);
  const close = () => setSubform(null);

  const getContent = () => {
    switch (subform) {
      case SubformEnum.country:
        return <CountrySubform close={() => setSubform(SubformEnum.place)} />;
      case SubformEnum.ingredient:
        return <IngredientSubform close={close} />;
      case SubformEnum.institution:
        return <InstitutionSubform close={close} />;
      case SubformEnum.language:
        return <LanguageSubform close={close} />;
      case SubformEnum.place:
        return <PlaceSubform close={close} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    const classList = document?.querySelector('body')?.classList;

    if (classList) {
      if (subform) {
        classList.add('scroll-lock');
      } else {
        classList.remove('scroll-lock');
      }
    }
  }, [subform]);

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
