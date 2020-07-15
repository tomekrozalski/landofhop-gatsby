import { IntlShape } from 'react-intl';
import isBoolean from 'lodash/isBoolean';

import { SiteLanguage } from 'utils/enums';
import {
  ContainerColor,
  ContainerMaterial,
  ContainerType,
  ContainerUnit,
} from 'components/BeverageDetails/utils/enums';
import { BeverageFieldNames as FieldName } from 'dashboard/utils/enums';
import { LanguageValue } from 'dashboard/utils/types';
import {
  convertDateToString,
  getValueByLanguage as getValueByLanguageHelper,
} from 'dashboard/utils/helpers';
import {
  normalizeObjectLanguage as normalizeObjectLanguageHelper,
  normalizeLanguageValuePair as normalizeLanguageValuePairHelper,
} from '../helpers';
import {
  label as initialLabelValues,
  producer as initialProducerValues,
  editorial as initialEditorialValues,
} from '../initialValues';
import { BeverageType } from '../Beverage.type';
import { Filtration } from 'components/BeverageDetails/Testimony';

type Props = {
  data: BeverageType;
  intl: IntlShape;
  languages: any[];
};

const dataToForm = ({ data, intl, languages }: Props) => {
  const {
    added,
    alcohol,
    badge,
    barcode,
    brand,
    container,
    contract,
    cooperation,
    extract,
    fermentation,
    filtration,
    name,
    notes,
    pasteurization,
    place,
    series,
    style,
    tale,
    updated,
  } = data;

  console.log('data', data);

  const normalizeObjectLanguage = normalizeObjectLanguageHelper({
    intl,
    languages,
  });

  const normalizeLanguageValuePair = normalizeLanguageValuePairHelper({
    intl,
    languages,
  });

  const getValueByLanguage = (field: LanguageValue[]) =>
    getValueByLanguageHelper(field, intl.locale as SiteLanguage).value;

  return {
    normalizedLabel: {
      ...initialLabelValues,
      // required
      [FieldName.badge]: badge,
      // -----------
      // required
      [FieldName.name]: name.map(normalizeLanguageValuePair),
      ...(series?.label && {
        [FieldName.series]: series?.label?.map(normalizeLanguageValuePair),
      }),
      // required
      [FieldName.brand]: normalizeObjectLanguage(brand),
      ...(cooperation?.label && {
        [FieldName.cooperation]: cooperation?.label.map(
          normalizeObjectLanguage,
        ),
      }),
      ...(contract?.label && {
        [FieldName.contract]: normalizeObjectLanguage(contract.label),
      }),
      ...(place?.label && {
        [FieldName.place]: {
          label: `${getValueByLanguage(place.label.city)} (${getValueByLanguage(
            place.label.institution,
          )})`,
          value: place.label.id,
        },
      }),
      ...(tale?.label && {
        [FieldName.tale]: tale.label.map(normalizeLanguageValuePair),
      }),
      ...(barcode && { [FieldName.barcode]: barcode }),
      // -----------
      ...(fermentation?.label && { fermentation: fermentation.label }),
      ...(style?.label && {
        style: style.label.map(normalizeLanguageValuePair),
      }),
      ...(extract?.label && {
        extract: {
          relate: {
            label: intl.formatMessage({
              id: `global.extractRelate.${extract.label.relate}`,
            }),
            value: extract.label.relate,
          },
          unit: {
            label: intl.formatMessage({
              id: `global.extractUnit.${extract.label.unit}`,
            }),
            value: extract.label.unit,
          },
          value: extract.label.value,
        },
      }),
      ...(alcohol?.label && {
        alcohol: {
          relate: {
            label: intl.formatMessage({
              id: `global.alcoholRelate.${alcohol.label.relate}`,
            }),
            value: alcohol.label.relate,
          },
          unit: {
            label: intl.formatMessage({
              id: `global.alcoholUnit.${alcohol.label.unit}`,
            }),
            value: alcohol.label.unit,
          },
          value: alcohol.label.value,
          scope: alcohol.label.scope
            ? {
                label: intl.formatMessage({
                  id: `global.alcoholScope.${alcohol.label.scope}`,
                }),
                value: alcohol.label.scope,
              }
            : {
                label: '--',
                value: '-',
              },
        },
      }),
      ...(isBoolean(filtration?.label) && { filtration: filtration?.label }),
      ...(isBoolean(pasteurization?.label) && {
        pasteurization: pasteurization?.label,
      }),
      // -----------
      // required
      [FieldName.container]: {
        color: container.color
          ? {
              label: intl.formatMessage({
                id: `beverage.details.container.color.${container.color}`,
              }),
              value: container.color as ContainerColor,
            }
          : {
              label: intl.formatMessage({
                id: `beverage.details.container.material.${ContainerColor.brown}`,
              }),
              value: ContainerColor.brown,
            },
        material: container.material
          ? {
              label: intl.formatMessage({
                id: `beverage.details.container.material.${container.material}`,
              }),
              value: container.material as ContainerMaterial,
            }
          : {
              label: intl.formatMessage({
                id: `beverage.details.container.material.${ContainerMaterial.glass}`,
              }),
              value: ContainerMaterial.glass,
            },
        unit: container.unit
          ? {
              label: intl.formatMessage({
                id: `beverage.details.container.unit.${container.unit}`,
              }),
              value: container.unit as ContainerUnit,
            }
          : {
              label: intl.formatMessage({
                id: `beverage.details.container.unit.${ContainerUnit.ml}`,
              }),
              value: ContainerUnit.ml,
            },
        type: container.type
          ? {
              label: intl.formatMessage({
                id: `beverage.details.container.type.${container.type}`,
              }),
              value: container.type as ContainerType,
            }
          : {
              label: intl.formatMessage({
                id: `beverage.details.container.type.${ContainerType.bottle}`,
              }),
              value: ContainerType.bottle,
            },
        value: container.value || 0,
        hasCapWireFlip: false,
      },
    },
    normalizedProducer: {
      ...initialProducerValues,
      ...(tale?.producer && {
        [FieldName.tale]: tale.producer.map(normalizeLanguageValuePair),
      }),
    },
    normalizedEditorial: {
      ...initialEditorialValues,
      added: convertDateToString(added),
      ...(updated && { updated: convertDateToString(updated) }),
      ...(notes && {
        [FieldName.notes]: notes,
      }),
    },
  };
};

export default dataToForm;
