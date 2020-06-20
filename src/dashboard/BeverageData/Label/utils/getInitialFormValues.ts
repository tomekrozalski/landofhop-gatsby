import { IntlShape } from 'react-intl';

import { SiteLanguage } from 'utils/enums';
import { BeverageType } from 'dashboard/utils/contexts';
import { BeverageFieldNames as FieldName } from 'dashboard/utils/enums';
import { LanguageValue as LanguageValueType } from 'dashboard/utils/types';
import { getValueByLanguage } from 'dashboard/utils/helpers';

type Props = {
  data: BeverageType;
  intl: IntlShape;
  languages: any[];
};

const getInitialFormValues = ({ data, intl, languages }: Props) => {
  const {
    badge,
    brand,
    contract,
    cooperation,
    name,
    place,
    series,
    tale,
  } = data;
  const { formatMessage, locale } = intl;

  const getLanguageLabelById = (value: string) =>
    getValueByLanguage(
      languages.find(({ id }) => id === value).name,
      locale as SiteLanguage,
    ).value;

  const LanguageNormalizer = ({ language, value }: LanguageValueType) => ({
    lang: {
      label: language
        ? getLanguageLabelById(language)
        : formatMessage({ id: 'language.none' }),
      value: language || 'none',
    },
    value,
  });

  const normalizeObjectLanguage = ({
    id,
    name: brandName,
  }: {
    id: string;
    name: { language?: string; value: string }[];
  }) => {
    const normalizedNames = brandName.map(({ language, value }) => ({
      language: language
        ? languages.find(({ id: langId }) => langId === language).code
        : 'none',
      value,
    }));

    return {
      label: getValueByLanguage(normalizedNames, locale as SiteLanguage).value,
      value: id,
    };
  };

  console.log('!', tale?.label?.map(LanguageNormalizer));

  return {
    [FieldName.badge]: badge,
    // -----------
    [FieldName.name]: name.map(LanguageNormalizer),
    [FieldName.series]: series?.label?.map(LanguageNormalizer) || [],
    [FieldName.brand]: brand.id ? normalizeObjectLanguage(brand) : '',
    [FieldName.cooperation]: cooperation?.label
      ? cooperation?.label.map(normalizeObjectLanguage)
      : null,
    [FieldName.contract]: contract?.label
      ? normalizeObjectLanguage(contract.label)
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
    [FieldName.tale]: tale?.label?.map(LanguageNormalizer) || [],
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
