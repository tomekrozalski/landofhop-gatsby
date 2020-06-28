import { IntlShape } from 'react-intl';

import { SiteLanguage } from 'utils/enums';
import {
  ContainerColor,
  ContainerMaterial,
  ContainerType,
  ContainerUnit,
} from 'components/BeverageDetails/utils/enums';
import { BeverageFieldNames as FieldName } from 'dashboard/utils/enums';
import { LanguageValue as LanguageValueType } from 'dashboard/utils/types';
import { getValueByLanguage } from 'dashboard/utils/helpers';
import { BeverageType } from '../../Beverage.type';

type Props = {
  data: BeverageType;
  intl: IntlShape;
  languages: any[];
};

const dataToLabelForm = ({ data, intl, languages }: Props) => {
  const {
    badge,
    barcode,
    brand,
    container,
    contract,
    cooperation,
    name,
    place,
    series,
    tale,
  } = data;
  const { formatMessage, locale } = intl;

  console.log('dataToLabelForm', data);

  const getLanguageLabelById = (value: string) =>
    getValueByLanguage(
      languages.find(({ id }) => id === value).name,
      locale as SiteLanguage,
    ).value;

  const getLabelByLanguageId = (language: string | undefined) => {
    switch (language) {
      case '':
        return '';
      case undefined:
        return formatMessage({ id: 'language.none' });
      default:
        return getLanguageLabelById(language);
    }
  };

  const LanguageNormalizer = ({ language, value }: LanguageValueType) => {
    return {
      lang: {
        label: getLabelByLanguageId(language),
        value: language || 'none',
      },
      value,
    };
  };

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
    [FieldName.barcode]: barcode || null,
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
      color: container.color
        ? {
            label: formatMessage({
              id: `beverage.details.container.color.${container.color}`,
            }),
            value: container.color as ContainerColor,
          }
        : {
            label: formatMessage({
              id: `beverage.details.container.material.${ContainerColor.brown}`,
            }),
            value: ContainerColor.brown,
          },
      material: container.material
        ? {
            label: formatMessage({
              id: `beverage.details.container.material.${container.material}`,
            }),
            value: container.material as ContainerMaterial,
          }
        : {
            label: formatMessage({
              id: `beverage.details.container.material.${ContainerMaterial.glass}`,
            }),
            value: ContainerMaterial.glass,
          },
      unit: container.unit
        ? {
            label: formatMessage({
              id: `beverage.details.container.unit.${container.unit}`,
            }),
            value: container.unit as ContainerUnit,
          }
        : {
            label: formatMessage({
              id: `beverage.details.container.unit.${ContainerUnit.ml}`,
            }),
            value: ContainerUnit.ml,
          },
      type: container.type
        ? {
            label: formatMessage({
              id: `beverage.details.container.type.${container.type}`,
            }),
            value: container.type as ContainerType,
          }
        : {
            label: formatMessage({
              id: `beverage.details.container.type.${ContainerType.bottle}`,
            }),
            value: ContainerType.bottle,
          },
      value: container.value || 0,
      hasCapWireFlip: false,
    },
    [FieldName.price]: [],
  };
};

export default dataToLabelForm;
