import { IntlShape } from 'react-intl';

import { SiteLanguage } from 'utils/enums';
import { BeverageType } from 'dashboard/utils/contexts';
import { BeverageFieldNames as FieldName } from 'dashboard/utils/enums';
import { LangValue as LangValueNormalizer } from 'dashboard/utils/normalizers';
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

  console.log('name', name);

  const getLanguageLabelById = (value: string | undefined) => {
    console.log('value', value);
    const languageObject = languages.find(({ id }) => id === value);
    return getValueByLanguage(languageObject.name, locale as SiteLanguage)
      .value;
  };

  return {
    [FieldName.badge]: badge,
    // -----------
    [FieldName.name]: name.map(({ language, value }) => ({
      lang: {
        label: getLanguageLabelById(language),
        value: language,
      }, // @ToDo: we don't know does language exists, if not it should render "not applies"
      value,
    })),
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
    [FieldName.tale]: tale?.label
      ? tale?.label.map(
          ({ language, value }: { language: string; value: string }) => ({
            lang: {
              label: getLanguageLabelById(language),
              value: language,
            },
            value,
          }),
        )
      : null,
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
