import React, { useContext } from 'react';

import { Modal } from 'elements';
import { NavigationContext } from 'dashboard/utils/contexts';
import { Subform as SubformEnum } from 'dashboard/utils/enums';
import { Subform as CountrySubform } from 'dashboard/BeverageData/fields/Country';
import { Subform as IngredientSubform } from 'dashboard/BeverageData/fields/IngredientsList';
import { Subform as InstitutionSubform } from 'dashboard/BeverageData/fields/Brand';
import LanguageSubform from 'dashboard/BeverageData/elements/Navigation/Aside/Language';
import { Subform as PlaceSubform } from 'dashboard/BeverageData/fields/Place';

const DashboardModal: React.FC = () => {
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

  return (
    <Modal close={close} isVisible={!!subform}>
      {getContent()}
    </Modal>
  );
};

export default DashboardModal;
