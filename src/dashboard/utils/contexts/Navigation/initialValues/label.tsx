import { BeverageFieldNames as FieldName } from 'dashboard/utils/enums';

const label = {
  [FieldName.badge]: '',
  // -----------
  [FieldName.name]: [{ lang: { value: '' }, value: '' }],
  [FieldName.series]: [],
  [FieldName.brand]: { label: '', value: '' },
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
  [FieldName.container]: {
    color: { value: '' },
    material: { value: '' },
    unit: { value: '' },
    type: { value: '' },
    value: 0,
    hasCapWireFlip: false,
  },
  [FieldName.price]: [],
};

export default label;
