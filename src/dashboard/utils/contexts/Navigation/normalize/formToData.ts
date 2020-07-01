import { Lang } from 'dashboard/utils/types/form';
import { FormValues as FormValuesLabel } from 'dashboard/BeverageData/Label/utils';
import { FormValues as FormValuesProducer } from 'dashboard/BeverageData/Producer/utils';
import { FormValues as FormValuesEditorial } from 'dashboard/BeverageData/Editorial/utils';

type Props = {
  label: FormValuesLabel;
  producer: FormValuesProducer;
  editorial: FormValuesEditorial;
};

const formToData = ({ label, producer, editorial }: Props) => {
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
    badge: label.badge,
    name: label.name.map(normalizeLangValue),
    ...(label.series.length && {
      series: {
        ...(label.series.length && {
          label: label.series.map(normalizeLangValue),
        }),
      },
    }),
    brand: label.brand.value,
    ...(label.cooperation && {
      cooperation: {
        ...(label.cooperation && {
          label: label.cooperation.map(({ value }) => value),
        }),
      },
    }),
    ...(label.contract && {
      contract: {
        ...(label.contract && {
          label: label.contract.value,
        }),
      },
    }),
    ...(label.place && {
      place: {
        ...(label.place && {
          label: label.place.value,
        }),
      },
    }),
    ...(label.tale && {
      tale: {
        ...(label.tale && {
          label: label.tale.map(normalizeLangValue),
        }),
      },
    }),
    ...(label.barcode && { barcode: label.barcode }),
  };
};

export default formToData;
