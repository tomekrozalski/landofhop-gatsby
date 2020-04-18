import { Beverage as BeverageType } from 'dashboard/utils/store/types';
import { LangValue as LangValueNormalizer } from 'dashboard/utils/normalizers';
import { BeverageFieldNames as FieldName } from 'dashboard/utils/enums';

const getInitialFormValues = (
  props: BeverageType,
  formatMessage: ({ id }: { id: string }) => string,
) => {
  console.log('getInitialFormValues', props);

  const { badge, name, series } = props;

  return {
    [FieldName.badge]: badge,
    // -----------
    [FieldName.name]: name.map(LangValueNormalizer(formatMessage)),
    [FieldName.series]:
      series?.label?.map(LangValueNormalizer(formatMessage)) || [],
    [FieldName.brand]: '',
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
