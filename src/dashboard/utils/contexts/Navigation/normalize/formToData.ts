import isBoolean from 'lodash/isBoolean';
import isNumber from 'lodash/isNumber';

import { Lang } from 'dashboard/utils/types/form';
import { convertStringToDate } from 'dashboard/utils/helpers';
import { FormValues as FormValuesLabel } from 'dashboard/BeverageData/Label/utils';
import { FormValues as FormValuesProducer } from 'dashboard/BeverageData/Producer/utils';
import { FormValues as FormValuesEditorial } from 'dashboard/BeverageData/Editorial/utils';

type Props = {
  id: string | null;
  label: FormValuesLabel;
  producer: FormValuesProducer;
  editorial: FormValuesEditorial;
};

const formToData = ({ id, label, producer, editorial }: Props) => {
  // eslint-disable-next-line no-console
  console.log('formToData', label, producer, editorial);

  const normalizeLangValue = ({
    lang,
    value,
  }: {
    lang: Lang;
    value: string;
  }) => ({
    ...(lang.value !== 'none' && { language: lang.value }),
    value,
  });

  return {
    ...(id && { id }),
    badge: label.badge,
    name: label.name.map(normalizeLangValue),
    ...((label.series.length || producer.series.length) && {
      series: {
        ...(label.series.length && {
          label: label.series.map(normalizeLangValue),
        }),
        ...(producer.series.length && {
          producer: producer.series.map(normalizeLangValue),
        }),
      },
    }),
    brand: label.brand.value,
    ...((label.cooperation ||
      producer.cooperation ||
      editorial.cooperation) && {
      cooperation: {
        ...(label.cooperation && {
          label: label.cooperation.map(({ value }) => value),
        }),
        ...(producer.cooperation && {
          producer: producer.cooperation.map(({ value }) => value),
        }),
        ...(editorial.cooperation && {
          editorial: editorial.cooperation.map(({ value }) => value),
        }),
      },
    }),
    ...((label.contract || producer.contract || editorial.contract) && {
      contract: {
        ...(label.contract && {
          label: label.contract.value,
        }),
        ...(producer.contract && {
          producer: producer.contract.value,
        }),
        ...(editorial.contract && {
          editorial: editorial.contract.value,
        }),
      },
    }),
    ...((label.place || producer.place || editorial.place) && {
      place: {
        ...(label.place && {
          label: label.place.value,
        }),
        ...(producer.place && {
          producer: producer.place.value,
        }),
        ...(editorial.place && {
          editorial: editorial.place.value,
        }),
      },
    }),
    ...((label.tale?.length || producer.tale?.length) && {
      tale: {
        ...(label.tale?.length && {
          label: label.tale.map(normalizeLangValue),
        }),
        ...(producer.tale?.length && {
          producer: producer.tale.map(normalizeLangValue),
        }),
      },
    }),
    ...(label.barcode && { barcode: label.barcode }),
    // -----------
    ...((label.fermentation ||
      producer.fermentation ||
      editorial.fermentation) && {
      fermentation: {
        ...(label.fermentation && {
          label: label.fermentation,
        }),
        ...(producer.fermentation && {
          producer: producer.fermentation,
        }),
        ...(editorial.fermentation && {
          editorial: editorial.fermentation,
        }),
      },
    }),
    ...((label.style?.length ||
      producer.style?.length ||
      editorial.style?.length) && {
      style: {
        ...(label.style?.length && {
          label: label.style.map(normalizeLangValue),
        }),
        ...(producer.style?.length && {
          producer: producer.style.map(normalizeLangValue),
        }),
        ...(editorial.style?.length && {
          editorial: editorial.style.map(normalizeLangValue),
        }),
      },
    }),
    ...((label.extract || producer.extract) && {
      extract: {
        ...(label.extract && {
          label: {
            relate: label.extract.relate.value,
            unit: label.extract.unit.value,
            value: label.extract.value,
          },
        }),
        ...(producer.extract && {
          producer: {
            relate: producer.extract.relate.value,
            unit: producer.extract.unit.value,
            value: producer.extract.value,
          },
        }),
      },
    }),
    ...((label.alcohol || producer.alcohol || editorial.alcoholScope) && {
      alcohol: {
        ...(label.alcohol && {
          label: {
            relate: label.alcohol.relate.value,
            unit: label.alcohol.unit.value,
            value: label.alcohol.value,
            ...(label.alcohol.scope.value !== '-' && {
              scope: label.alcohol.scope.value,
            }),
          },
        }),
        ...(producer.alcohol && {
          producer: {
            relate: producer.alcohol.relate.value,
            unit: producer.alcohol.unit.value,
            value: producer.alcohol.value,
            ...(producer.alcohol.scope.value !== '-' && {
              scope: producer.alcohol.scope.value,
            }),
          },
        }),
        ...(editorial.alcoholScope &&
          editorial.alcoholScope.value !== '-' && {
            editorial: {
              scope: editorial.alcoholScope.value,
            },
          }),
      },
    }),
    ...((isBoolean(label.filtration) ||
      isBoolean(producer.filtration) ||
      isBoolean(editorial.filtration)) && {
      filtration: {
        ...(isBoolean(label.filtration) && {
          label: label.filtration,
        }),
        ...(isBoolean(producer.filtration) && {
          producer: producer.filtration,
        }),
        ...(isBoolean(editorial.filtration) && {
          editorial: editorial.filtration,
        }),
      },
    }),
    ...((isBoolean(label.pasteurization) ||
      isBoolean(producer.pasteurization) ||
      isBoolean(editorial.pasteurization)) && {
      pasteurization: {
        ...(isBoolean(label.pasteurization) && {
          label: label.pasteurization,
        }),
        ...(isBoolean(producer.pasteurization) && {
          producer: producer.pasteurization,
        }),
        ...(isBoolean(editorial.pasteurization) && {
          editorial: editorial.pasteurization,
        }),
      },
    }),
    ...((label.aged.length ||
      producer.aged.length ||
      editorial.aged.length) && {
      aged: {
        ...(label.aged.length && {
          label: label.aged.map(({ type, wood, time, previousContent }) => ({
            ...(type && { type }),
            ...(wood && { wood }),
            ...(time && {
              time: {
                unit: time.unit.value,
                value: time.value,
              },
            }),
            ...(previousContent && {
              previousContent: previousContent.map(({ value }) => value),
            }),
          })),
        }),
        ...(producer.aged.length && {
          producer: producer.aged.map(
            ({ type, wood, time, previousContent }) => ({
              ...(type && { type }),
              ...(wood && { wood }),
              ...(time && {
                time: {
                  unit: time.unit.value,
                  value: time.value,
                },
              }),
              ...(previousContent && {
                previousContent: previousContent.map(({ value }) => value),
              }),
            }),
          ),
        }),
        ...(editorial.aged.length && {
          editorial: editorial.aged.map(
            ({ type, wood, time, previousContent }) => ({
              ...(type && { type }),
              ...(wood && { wood }),
              ...(time && {
                time: {
                  unit: time.unit.value,
                  value: time.value,
                },
              }),
              ...(previousContent && {
                previousContent: previousContent.map(({ value }) => value),
              }),
            }),
          ),
        }),
      },
    }),
    ...((label.dryHopped?.length ||
      producer.dryHopped?.length ||
      editorial.dryHopped?.length) && {
      dryHopped: {
        ...(label.dryHopped?.length && {
          label: label.dryHopped.map(({ value }) => value),
        }),
        ...(producer.dryHopped?.length && {
          producer: producer.dryHopped.map(({ value }) => value),
        }),
        ...(editorial.dryHopped?.length && {
          editorial: editorial.dryHopped.map(({ value }) => value),
        }),
      },
    }),
    ...(((label.dryHopped && !label.dryHopped?.length) ||
      (producer.dryHopped && !producer.dryHopped?.length) ||
      (editorial.dryHopped && !editorial.dryHopped?.length)) && {
      isDryHopped: {
        ...(label.dryHopped &&
          !label.dryHopped?.length && {
            label: true,
          }),
        ...(producer.dryHopped &&
          !producer.dryHopped?.length && {
            producer: true,
          }),
        ...(editorial.dryHopped &&
          !editorial.dryHopped?.length && {
            editorial: true,
          }),
      },
    }),
    ...((label.expirationDate || producer.expirationDate) && {
      expirationDate: {
        ...(label.expirationDate && {
          label: {
            unit: label.expirationDate.unit.value,
            value: label.expirationDate.value,
          },
        }),
        ...(producer.expirationDate && {
          producer: {
            unit: producer.expirationDate.unit.value,
            value: producer.expirationDate.value,
          },
        }),
      },
    }),
    // -----------
    ...((label.ingredientsDescription?.length ||
      producer.ingredientsDescription?.length) && {
      ingredientsDescription: {
        ...(label.ingredientsDescription?.length && {
          label: label.ingredientsDescription.map(
            ({ language, value, complete }) => ({
              ...(language.value !== 'none' && { language: language.value }),
              value,
              complete,
            }),
          ),
        }),
        ...(producer.ingredientsDescription?.length && {
          producer: producer.ingredientsDescription.map(
            ({ language, value, complete }) => ({
              ...(language.value !== 'none' && { language: language.value }),
              value,
              complete,
            }),
          ),
        }),
      },
    }),
    ...((label.ingredientsList?.length || producer.ingredientsList?.length) && {
      ingredientsList: {
        ...(label.ingredientsList?.length && {
          label: label.ingredientsList.map(({ value }) => value),
        }),
        ...(producer.ingredientsList?.length && {
          producer: producer.ingredientsList.map(({ value }) => value),
        }),
      },
    }),
    ...((isBoolean(label.smokedMalt) || isBoolean(producer.smokedMalt)) && {
      smokedMalt: {
        ...(isBoolean(label.smokedMalt) && {
          label: label.smokedMalt,
        }),
        ...(isBoolean(producer.smokedMalt) && {
          producer: producer.smokedMalt,
        }),
      },
    }),
    // -----------
    ...((isNumber(label.bitterness) || isNumber(producer.bitterness)) && {
      bitterness: {
        ...(isNumber(label.bitterness) && {
          label: label.bitterness,
        }),
        ...(isNumber(producer.bitterness) && {
          producer: producer.bitterness,
        }),
      },
    }),
    ...((isNumber(label.sweetness) || isNumber(producer.sweetness)) && {
      sweetness: {
        ...(isNumber(label.sweetness) && {
          label: label.sweetness,
        }),
        ...(isNumber(producer.sweetness) && {
          producer: producer.sweetness,
        }),
      },
    }),
    ...((isNumber(label.fullness) || isNumber(producer.fullness)) && {
      fullness: {
        ...(isNumber(label.fullness) && {
          label: label.fullness,
        }),
        ...(isNumber(producer.fullness) && {
          producer: producer.fullness,
        }),
      },
    }),
    ...((isNumber(label.power) || isNumber(producer.power)) && {
      power: {
        ...(isNumber(label.power) && {
          label: label.power,
        }),
        ...(isNumber(producer.power) && {
          producer: producer.power,
        }),
      },
    }),
    ...((isNumber(label.hoppyness) || isNumber(producer.hoppyness)) && {
      hoppyness: {
        ...(isNumber(label.hoppyness) && {
          label: label.hoppyness,
        }),
        ...(isNumber(producer.hoppyness) && {
          producer: producer.hoppyness,
        }),
      },
    }),
    ...((label.temperature || producer.temperature) && {
      temperature: {
        ...(label.temperature && {
          label: {
            from: label.temperature.from,
            to: label.temperature.to,
            unit: label.temperature.unit.value,
          },
        }),
        ...(producer.temperature && {
          producer: {
            from: producer.temperature.from,
            to: producer.temperature.to,
            unit: producer.temperature.unit.value,
          },
        }),
      },
    }),
    // -----------
    // fermentation: label, producer, editorial
    // style: label, producer, editorial
    // extract: label, producer
    // alcohol: label, producer
    // alcoholScope: editorial
    // filtration: label, producer, editorial
    // pasteurization: label, producer, editorial
    // aged: label, producer, editorial
    // dryHopped: label, producer, editorial
    // expirationDate: label, producer
    // ingredients: label, producer
    // ingredientList: label, producer
    // smokedMalt: label, producer

    // bitterness: label, producer
    // sweetness: label, producer
    // fullness: label, producer
    // power: label, producer
    // hoppyness: label, producer
    // temperature: label, producer

    // color: editorial
    // clarity: editorial
    // price: label, producer, editorial
    added: convertStringToDate(editorial.added),
    ...(editorial.updated && {
      updated: convertStringToDate(editorial.updated),
    }),
    // updated: editorial
    container: {
      color: label.container.color.value,
      material: label.container.material.value,
      type: label.container.type.value,
      unit: label.container.unit.value,
      value: label.container.value,
      ...(label.container.hasCapWireFlip && { hasCapWireFlip: true }),
    },
    ...((label.price?.length ||
      producer.price?.length ||
      editorial.price?.length) && {
      price: {
        ...(label.price?.length && {
          label: label.price.map(({ currency, date, value }) => {
            const [day, month, year] = date.split('.');

            return {
              currency: currency.value,
              date: new Date(+year, +month - 1, +day),
              value,
            };
          }),
        }),
        ...(producer.price?.length && {
          producer: producer.price.map(({ currency, date, value }) => {
            const [day, month, year] = date.split('.');

            return {
              currency: currency.value,
              date: new Date(+year, +month - 1, +day),
              value,
            };
          }),
        }),
        ...(editorial.price?.length && {
          editorial: editorial.price.map(({ currency, date, value }) => {
            const [day, month, year] = date.split('.');

            return {
              currency: currency.value,
              date: new Date(+year, +month - 1, +day),
              value,
            };
          }),
        }),
      },
    }),
    ...(editorial.notes && { notes: editorial.notes }),
  };
};

export default formToData;
