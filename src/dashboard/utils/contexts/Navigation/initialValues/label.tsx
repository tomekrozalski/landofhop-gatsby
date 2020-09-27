import { BeverageFieldNames as FieldName } from 'dashboard/utils/enums';
import {
  ContainerColor,
  ContainerMaterial,
  ContainerType,
  ContainerUnit,
} from 'components/BeverageDetails/utils/enums';

const label = {
  [FieldName.badge]: '',
  // -----------
  [FieldName.name]: [{ lang: { value: '' }, value: '' }],
  [FieldName.series]: [],
  [FieldName.brand]: { label: '', value: '' },
  [FieldName.cooperation]: null,
  [FieldName.contract]: null,
  [FieldName.place]: null,
  [FieldName.remark]: [],
  [FieldName.tale]: [],
  [FieldName.barcode]: null,
  // -----------
  [FieldName.beverageType]: null,
  [FieldName.fermentation]: null,
  [FieldName.style]: [],
  [FieldName.extract]: null,
  [FieldName.alcohol]: null,
  [FieldName.filtration]: null,
  [FieldName.pasteurization]: null,
  [FieldName.aged]: [],
  [FieldName.dryHopped]: null,
  [FieldName.hopRate]: null,
  [FieldName.expirationDate]: null,
  // -----------
  [FieldName.ingredientsDescription]: [],
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
    color: { label: '', value: ContainerColor.brown },
    material: { label: '', value: ContainerMaterial.glass },
    unit: { label: '', value: ContainerUnit.ml },
    type: { label: '', value: ContainerType.undefined },
    value: 0,
    hasCork: false,
    hasCapWireFlip: false,
  },
  [FieldName.price]: [],
};

export default label;
