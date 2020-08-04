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
    ...(label.series.length && {
      series: {
        ...(label.series.length && {
          label: label.series.map(normalizeLangValue),
        }),
        // producer
      },
    }),
    brand: label.brand.value,
    ...(label.cooperation && {
      cooperation: {
        ...(label.cooperation && {
          label: label.cooperation.map(({ value }) => value),
        }),
        // producer
        // editorial
      },
    }),
    ...(label.contract && {
      contract: {
        ...(label.contract && {
          label: label.contract.value,
        }),
        // producer
        // editorial
      },
    }),
    ...(label.place && {
      place: {
        ...(label.place && {
          label: label.place.value,
        }),
        // producer
        // editorial
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
    ...(label.fermentation && {
      fermentation: {
        ...(label.fermentation && {
          label: label.fermentation,
        }),
      },
    }),
    ...(label.style?.length && {
      style: {
        ...(label.style?.length && {
          label: label.style.map(normalizeLangValue),
        }),
      },
    }),
    ...(label.extract && {
      extract: {
        ...(label.extract && {
          label: {
            relate: label.extract.relate.value,
            unit: label.extract.unit.value,
            value: label.extract.value,
          },
        }),
      },
    }),
    ...(label.alcohol && {
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
      },
    }),
    ...(isBoolean(label.filtration) && {
      filtration: {
        ...(isBoolean(label.filtration) && {
          label: label.filtration,
        }),
      },
    }),
    ...(isBoolean(label.pasteurization) && {
      pasteurization: {
        ...(isBoolean(label.pasteurization) && {
          label: label.pasteurization,
        }),
      },
    }),
    ...(label.aged.length && {
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
      },
    }),
    ...(label.dryHopped?.length && {
      dryHopped: {
        ...(label.dryHopped?.length && {
          label: label.dryHopped.map(({ value }) => value),
        }),
      },
    }),
    ...(label.dryHopped &&
      !label.dryHopped?.length && {
        isDryHopped: {
          ...(label.dryHopped &&
            !label.dryHopped?.length && {
              label: true,
            }),
        },
      }),
    ...(label.expirationDate && {
      expirationDate: {
        ...(label.expirationDate && {
          label: {
            unit: label.expirationDate.unit.value,
            value: label.expirationDate.value,
          },
        }),
      },
    }),
    // -----------
    ...(label.ingredientsDescription?.length && {
      ingredientsDescription: {
        label: label.ingredientsDescription.map(
          ({ language, value, complete }) => ({
            ...(language.value !== 'none' && { language: language.value }),
            value,
            complete,
          }),
        ),
      },
    }),
    ...(label.ingredientsList?.length && {
      ingredientsList: {
        label: label.ingredientsList.map(({ value }) => value),
      },
    }),
    ...(isBoolean(label.smokedMalt) && {
      smokedMalt: {
        label: label.smokedMalt,
      },
    }),
    // -----------
    ...(isNumber(label.bitterness) && {
      bitterness: {
        label: label.bitterness,
      },
    }),
    ...(isNumber(label.sweetness) && {
      sweetness: {
        label: label.sweetness,
      },
    }),
    ...(isNumber(label.fullness) && {
      fullness: {
        label: label.fullness,
      },
    }),
    ...(isNumber(label.power) && {
      power: {
        label: label.power,
      },
    }),
    ...(isNumber(label.hoppyness) && {
      hoppyness: {
        label: label.hoppyness,
      },
    }),
    ...(label.temperature && {
      temperature: {
        label: {
          from: label.temperature.from,
          to: label.temperature.to,
          unit: label.temperature.unit.value,
        },
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
    ...((label.price?.length || editorial.price?.length) && {
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
