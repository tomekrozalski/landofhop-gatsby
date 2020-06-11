import { IntlShape } from 'react-intl';

import { SiteLanguage } from 'utils/enums';
import { BeverageType } from 'dashboard/utils/contexts';
import { BeverageFieldNames as FieldName } from 'dashboard/utils/enums';
import { LangValue as LangValueNormalizer } from 'dashboard/utils/normalizers';
import { getValueByLanguage } from 'dashboard/utils/helpers';

const getInitialFormValues = (props: BeverageType, intl: IntlShape) => {
  console.log('getInitialFormValues', props);

  const { badge, brand, contract, cooperation, name, place, series } = props;
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
      : '',
    [FieldName.cooperation]: cooperation?.label
      ? cooperation?.label.map(
          ({ id, name: cooperationName }: { id: string; name: any }) => ({
            label: getValueByLanguage(cooperationName, locale as SiteLanguage)
              .value,
            value: id,
          }),
        )
      : null,
    [FieldName.contract]: contract?.label
      ? {
          label: getValueByLanguage(contract.label.name, locale as SiteLanguage)
            .value,
          value: contract.label.id,
        }
      : null,
    [FieldName.place]: place?.label
      ? {
          label: `${
            getValueByLanguage(place.label.city, locale as SiteLanguage).value
          } (${
            getValueByLanguage(place.label.institution, locale as SiteLanguage)
              .value
          })`,
          value: place.label.id,
        }
      : null,
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
