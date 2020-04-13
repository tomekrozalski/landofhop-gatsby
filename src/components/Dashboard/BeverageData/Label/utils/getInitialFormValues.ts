import { TranslatedBeverage as TranslatedBeverageTypes } from 'utils/types';
import { DataLanguage } from 'utils/enums';
import FieldName from './FieldName.enum';

const getLanguageObject = (
  value: DataLanguage | null,
  formatMessage: ({ id }: { id: string }) => void,
) => ({
  label: formatMessage({ id: `language.${value}` }),
  value,
});

const getInitialFormValues = (
  data: TranslatedBeverageTypes,
  formatMessage: ({ id }: { id: string }) => void,
) => {
  console.log('!', data);

  const { badge, name } = data;

  return {
    [FieldName.badge]: badge,
    // -----------
    [FieldName.name]: name.map(({ lang, value }: any) => ({
      lang: getLanguageObject(lang, formatMessage),
      value,
    })),
    [FieldName.series]: [],
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
