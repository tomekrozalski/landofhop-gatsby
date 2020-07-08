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
    },
    ...(editorial.notes && { notes: editorial.notes }),
  };
};

export default formToData;
