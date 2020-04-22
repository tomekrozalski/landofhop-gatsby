import { IntlShape } from 'react-intl';

import { SiteLanguage } from 'utils/enums';
import { Beverage as BeverageType } from 'dashboard/utils/store/types';
import { BeverageFieldNames as FieldName } from 'dashboard/utils/enums';
import { LangValue as LangValueNormalizer } from 'dashboard/utils/normalizers';
import { getValueByLanguage } from 'dashboard/utils/helpers';

const getInitialFormValues = (props: BeverageType, intl: IntlShape) => {
  console.log('getInitialFormValues', props);

  const { badge, brand, name, series } = props;
  const { formatMessage, locale } = intl;

  return {
    [FieldName.badge]: badge,
    // -----------
    [FieldName.name]: name.map(LangValueNormalizer(formatMessage)),
    [FieldName.series]:
      series?.label?.map(LangValueNormalizer(formatMessage)) || [],
    [FieldName.brand]: brand.id
      ? {
          label: getValueByLanguage(brand.name, locale as SiteLanguage).value,
          value: brand.id,
        }
      : null,
    [FieldName.cooperation]: null,
    [FieldName.contract]: null,
    [FieldName.place]: null,
    [FieldName.tale]: [],
    [FieldName.barcode]: null,
    // -----------
    [FieldName.fermentation]: null,
    [FieldName.style]: [],
    [FieldName.extract]: null,
    [FieldName.alcohol]: null,
    [FieldName.filtration]: null,
    [FieldName.pasteurization]: null,
    [FieldName.aged]: [],
    [FieldName.dryHopped]: null,
    [FieldName.expirationDate]: null,
    // -----------
    [FieldName.ingredients]: [],
    [FieldName.ingredientsList]: null,
    [FieldName.smokedMalt]: null,
    // -----------
    [FieldName.bitterness]: null,
    [FieldName.sweetness]: null,
    [FieldName.fullness]: null,
    [FieldName.power]: null,
    [FieldName.hoppyness]: null,
    [FieldName.temperature]: null,
    // -----------
    // [FieldName.container]: {
    // 	color: containerColorsList()[0],
    // 	material: containerMaterialsList()[0],
    // 	unit: containerUnitsList()[0],
    // 	type: containerTypesList()[0],
    // 	capacityValue: 0,
    // 	hasCapWireFlip: false,
    // },
    [FieldName.price]: [],
  };
};

export default getInitialFormValues;
