import { IntlShape } from 'react-intl';
import isBoolean from 'lodash/isBoolean';
import isNumber from 'lodash/isNumber';
import { format } from 'date-fns';

import { SiteLanguage } from 'utils/enums';
import {
  AlcoholRelate,
  AlcoholScope,
  AlcoholUnit,
  ContainerColor,
  ContainerMaterial,
  ContainerType,
  ContainerUnit,
  Currency as CurrencyEnum,
  IngredientType,
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
  normalizeIngredientsDescription as normalizeIngredientsDescriptionHelper,
} from '../helpers';
import {
  label as initialLabelValues,
  producer as initialProducerValues,
  editorial as initialEditorialValues,
} from '../initialValues';
import { BeverageType } from '../Beverage.type';

type Props = {
  data: BeverageType;
  intl: IntlShape;
  languages: any[];
};

const dataToForm = ({
  data: {
    added,
    aged,
    alcohol,
    badge,
    barcode,
    bitterness,
    brand,
    container,
    contract,
    cooperation,
    dryHopped,
    expirationDate,
    extract,
    fermentation,
    filtration,
    fullness,
    hoppyness,
    ingredientsDescription,
    ingredientsList,
    isAged,
    isDryHopped,
    name,
    notes,
    pasteurization,
    place,
    power,
    price,
    series,
    smokedMalt,
    style,
    sweetness,
    tale,
    temperature,
    updated,
  },
  intl,
  languages,
}: Props) => {
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
            value: alcohol.label.relate as AlcoholRelate,
          },
          unit: {
            label: intl.formatMessage({
              id: `global.alcoholUnit.${alcohol.label.unit}`,
            }),
            value: alcohol.label.unit as AlcoholUnit,
          },
          value: alcohol.label.value,
          scope: alcohol.label.scope
            ? {
                label: intl.formatMessage({
                  id: `global.alcoholScopeValues.${alcohol.label.scope}`,
                }),
                value: alcohol.label.scope as AlcoholScope,
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
      ...(aged?.label?.length && {
        aged: aged?.label.map(({ type, wood, time, previousContent }) => ({
          type: type || null,
          wood: wood || null,
          time: time
            ? {
                unit: {
                  label: intl.formatMessage({
                    id: `global.timeUnit.${time.unit}`,
                  }),
                  value: time.unit,
                },
                value: time.value,
              }
            : null,
          previousContent: previousContent?.length
            ? previousContent.map(value => ({
                label: intl.formatMessage({
                  id: `beverage.details.aged.previousContent.${value}`,
                }),
                value,
              }))
            : null,
        })),
      }),
      ...(!aged?.label?.length &&
        isAged?.label && {
          aged: [{ type: null, wood: null, time: null, previousContent: null }],
        }),
      ...(isDryHopped?.label && {
        dryHopped: isDryHopped.label ? [] : null,
      }),
      ...(dryHopped?.label && {
        dryHopped: dryHopped.label.map(({ id, name: hopName, type }) => ({
          label: getValueByLanguage(hopName),
          value: id,
          type: type as IngredientType,
        })),
      }),
      ...(expirationDate?.label && {
        expirationDate: {
          unit: {
            label: intl.formatMessage({
              id: `global.timeUnit.${expirationDate.label.unit}`,
            }),
            value: expirationDate.label.unit,
          },
          value: expirationDate.label.value,
        },
      }),
      // -----------
      ...(ingredientsDescription?.label?.length && {
        ingredientsDescription: ingredientsDescription.label.map(
          normalizeIngredientsDescriptionHelper({ languages, intl }),
        ),
      }),
      ...(ingredientsList?.label?.length && {
        ingredientsList: ingredientsList.label.map(
          ({ id, name: ingredientName, type }) => ({
            label: getValueByLanguage(ingredientName),
            value: id,
            type: type as IngredientType,
          }),
        ),
      }),
      ...(isBoolean(smokedMalt?.label) && {
        smokedMalt: smokedMalt?.label,
      }),
      // -----------
      ...(isNumber(bitterness?.label) && { bitterness: bitterness?.label }),
      ...(isNumber(sweetness?.label) && { sweetness: sweetness?.label }),
      ...(isNumber(fullness?.label) && { fullness: fullness?.label }),
      ...(isNumber(power?.label) && { power: power?.label }),
      ...(isNumber(hoppyness?.label) && { hoppyness: hoppyness?.label }),
      ...(temperature?.label && {
        temperature: {
          from: temperature.label.from,
          to: temperature.label.to,
          unit: {
            label: intl.formatMessage({
              id: `global.temperatureUnit.${temperature.label.unit}`,
            }),
            value: temperature.label.unit,
          },
        },
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
        hasCapWireFlip: container.hasCapWireFlip || false,
      },
      ...(price?.label && {
        price: price?.label.map(({ currency, date, value }) => ({
          currency: {
            label: intl.formatMessage({
              id: `global.currency.${currency}`,
            }),
            value: currency as CurrencyEnum,
          },
          date: format(new Date(date), 'dd.MM.yyyy'),
          value,
        })),
      }),
    },
    normalizedProducer: {
      ...initialProducerValues,
      ...(series?.producer && {
        [FieldName.series]: series?.producer?.map(normalizeLanguageValuePair),
      }),
      ...(cooperation?.producer && {
        [FieldName.cooperation]: cooperation?.producer.map(
          normalizeObjectLanguage,
        ),
      }),
      ...(contract?.producer && {
        [FieldName.contract]: normalizeObjectLanguage(contract.producer),
      }),
      ...(place?.producer && {
        [FieldName.place]: {
          label: `${getValueByLanguage(
            place.producer.city,
          )} (${getValueByLanguage(place.producer.institution)})`,
          value: place.producer.id,
        },
      }),
      ...(tale?.producer && {
        [FieldName.tale]: tale.producer.map(normalizeLanguageValuePair),
      }),
      // -----------
      ...(fermentation?.producer && { fermentation: fermentation.producer }),
      ...(style?.producer && {
        style: style.producer.map(normalizeLanguageValuePair),
      }),
      ...(extract?.producer && {
        extract: {
          relate: {
            label: intl.formatMessage({
              id: `global.extractRelate.${extract.producer.relate}`,
            }),
            value: extract.producer.relate,
          },
          unit: {
            label: intl.formatMessage({
              id: `global.extractUnit.${extract.producer.unit}`,
            }),
            value: extract.producer.unit,
          },
          value: extract.producer.value,
        },
      }),
      ...(alcohol?.producer && {
        alcohol: {
          relate: {
            label: intl.formatMessage({
              id: `global.alcoholRelate.${alcohol.producer.relate}`,
            }),
            value: alcohol.producer.relate as AlcoholRelate,
          },
          unit: {
            label: intl.formatMessage({
              id: `global.alcoholUnit.${alcohol.producer.unit}`,
            }),
            value: alcohol.producer.unit as AlcoholUnit,
          },
          value: alcohol.producer.value,
          scope: alcohol.producer.scope
            ? {
                label: intl.formatMessage({
                  id: `global.alcoholScopeValues.${alcohol.producer.scope}`,
                }),
                value: alcohol.producer.scope as AlcoholScope,
              }
            : {
                label: '--',
                value: '-',
              },
        },
      }),
      ...(isBoolean(filtration?.producer) && {
        filtration: filtration?.producer,
      }),
      ...(isBoolean(pasteurization?.producer) && {
        pasteurization: pasteurization?.producer,
      }),
      ...(aged?.producer?.length && {
        aged: aged?.producer.map(({ type, wood, time, previousContent }) => ({
          type: type || null,
          wood: wood || null,
          time: time
            ? {
                unit: {
                  label: intl.formatMessage({
                    id: `global.timeUnit.${time.unit}`,
                  }),
                  value: time.unit,
                },
                value: time.value,
              }
            : null,
          previousContent: previousContent?.length
            ? previousContent.map(value => ({
                label: intl.formatMessage({
                  id: `beverage.details.aged.previousContent.${value}`,
                }),
                value,
              }))
            : null,
        })),
      }),
      ...(!aged?.producer?.length &&
        isAged?.producer && {
          aged: [{ type: null, wood: null, time: null, previousContent: null }],
        }),
      ...(isDryHopped?.producer && {
        dryHopped: isDryHopped.producer ? [] : null,
      }),
      ...(dryHopped?.producer && {
        dryHopped: dryHopped.producer.map(({ id, name: hopName, type }) => ({
          label: getValueByLanguage(hopName),
          value: id,
          type: type as IngredientType,
        })),
      }),
      ...(expirationDate?.producer && {
        expirationDate: {
          unit: {
            label: intl.formatMessage({
              id: `global.timeUnit.${expirationDate.producer.unit}`,
            }),
            value: expirationDate.producer.unit,
          },
          value: expirationDate.producer.value,
        },
      }),
      // -----------
      ...(ingredientsDescription?.producer?.length && {
        ingredientsDescription: ingredientsDescription.producer.map(
          normalizeIngredientsDescriptionHelper({ languages, intl }),
        ),
      }),
      ...(ingredientsList?.producer?.length && {
        ingredientsList: ingredientsList.producer.map(
          ({ id, name: ingredientName, type }) => ({
            label: getValueByLanguage(ingredientName),
            value: id,
            type: type as IngredientType,
          }),
        ),
      }),
      ...(isBoolean(smokedMalt?.producer) && {
        smokedMalt: smokedMalt?.producer,
      }),
      // -----------
      ...(isNumber(bitterness?.producer) && {
        bitterness: bitterness?.producer,
      }),
      ...(isNumber(sweetness?.producer) && { sweetness: sweetness?.producer }),
      ...(isNumber(fullness?.producer) && { fullness: fullness?.producer }),
      ...(isNumber(power?.producer) && { power: power?.producer }),
      ...(isNumber(hoppyness?.producer) && { hoppyness: hoppyness?.producer }),
      ...(temperature?.producer && {
        temperature: {
          from: temperature.producer.from,
          to: temperature.producer.to,
          unit: {
            label: intl.formatMessage({
              id: `global.temperatureUnit.${temperature.producer.unit}`,
            }),
            value: temperature.producer.unit,
          },
        },
      }),
      // -----------
      ...(price?.producer && {
        price: price?.producer.map(({ currency, date, value }) => ({
          currency: {
            label: intl.formatMessage({
              id: `global.currency.${currency}`,
            }),
            value: currency as CurrencyEnum,
          },
          date: format(new Date(date), 'dd.MM.yyyy'),
          value,
        })),
      }),
    },
    normalizedEditorial: {
      ...initialEditorialValues,
      ...(cooperation?.editorial && {
        [FieldName.cooperation]: cooperation?.editorial.map(
          normalizeObjectLanguage,
        ),
      }),
      ...(contract?.editorial && {
        [FieldName.contract]: normalizeObjectLanguage(contract.editorial),
      }),
      ...(place?.editorial && {
        [FieldName.place]: {
          label: `${getValueByLanguage(
            place.editorial.city,
          )} (${getValueByLanguage(place.editorial.institution)})`,
          value: place.editorial.id,
        },
      }),
      // -----------
      ...(fermentation?.editorial && { fermentation: fermentation.editorial }),
      ...(style?.editorial && {
        style: style.editorial.map(normalizeLanguageValuePair),
      }),
      ...(alcohol?.editorial && {
        alcoholScope: {
          label: intl.formatMessage({
            id: `global.alcoholScopeValues.${alcohol.editorial.scope}`,
          }),
          value: alcohol.editorial.scope as AlcoholScope,
        },
      }),
      ...(isBoolean(filtration?.editorial) && {
        filtration: filtration?.editorial,
      }),
      ...(isBoolean(pasteurization?.editorial) && {
        pasteurization: pasteurization?.editorial,
      }),
      ...(aged?.editorial?.length && {
        aged: aged?.editorial.map(({ type, wood, time, previousContent }) => ({
          type: type || null,
          wood: wood || null,
          time: time
            ? {
                unit: {
                  label: intl.formatMessage({
                    id: `global.timeUnit.${time.unit}`,
                  }),
                  value: time.unit,
                },
                value: time.value,
              }
            : null,
          previousContent: previousContent?.length
            ? previousContent.map(value => ({
                label: intl.formatMessage({
                  id: `beverage.details.aged.previousContent.${value}`,
                }),
                value,
              }))
            : null,
        })),
      }),
      ...(!aged?.editorial?.length &&
        isAged?.editorial && {
          aged: [{ type: null, wood: null, time: null, previousContent: null }],
        }),
      ...(isDryHopped?.editorial && {
        dryHopped: isDryHopped.editorial ? [] : null,
      }),
      ...(dryHopped?.editorial && {
        dryHopped: dryHopped.editorial.map(({ id, name: hopName, type }) => ({
          label: getValueByLanguage(hopName),
          value: id,
          type: type as IngredientType,
        })),
      }),
      // -----------
      ...(price?.editorial && {
        price: price?.editorial.map(({ currency, date, value }) => ({
          currency: {
            label: intl.formatMessage({
              id: `global.currency.${currency}`,
            }),
            value: currency as CurrencyEnum,
          },
          date: format(new Date(date), 'dd.MM.yyyy'),
          value,
        })),
      }),
      added: convertDateToString(added),
      ...(updated && { updated: convertDateToString(updated) }),
      ...(notes && {
        [FieldName.notes]: notes,
      }),
    },
  };
};

export default dataToForm;
