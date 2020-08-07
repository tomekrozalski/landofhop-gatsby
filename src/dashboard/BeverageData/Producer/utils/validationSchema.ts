import * as Yup from 'yup';

import { BeverageFieldNames as FieldName } from 'dashboard/utils/enums';
import { isValidDate } from 'dashboard/utils/helpers';
import { Fermentation as FermentationEnum } from 'components/BeverageDetails/utils/enums';

export default Yup.object().shape({
  [FieldName.series]: Yup.array().of(
    Yup.object().shape({
      lang: Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      }),
      value: Yup.string()
        .min(3)
        .required(),
    }),
  ),
  [FieldName.cooperation]: Yup.array()
    .min(1)
    .nullable(true),
  [FieldName.contract]: Yup.object()
    .shape({
      label: Yup.string().required(),
      value: Yup.string().required(),
    })
    .nullable(true),
  [FieldName.place]: Yup.object()
    .shape({
      label: Yup.string().required(),
      value: Yup.string().required(),
    })
    .nullable(true),
  [FieldName.tale]: Yup.array().of(
    Yup.object().shape({
      lang: Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      }),
      value: Yup.string()
        .min(12)
        .required(),
    }),
  ),
  // -----------
  [FieldName.fermentation]: Yup.array()
    .of(Yup.mixed().oneOf(Object.values(FermentationEnum)))
    .min(1)
    .nullable(true),
  [FieldName.style]: Yup.array().of(
    Yup.object().shape({
      lang: Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      }),
      value: Yup.string()
        .min(3)
        .required(),
    }),
  ),
  [FieldName.extract]: Yup.object()
    .shape({
      value: Yup.number()
        .min(0)
        .max(100)
        .required(),
      unit: Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      }),
      relate: Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      }),
    })
    .nullable(true),
  [FieldName.alcohol]: Yup.object()
    .shape({
      value: Yup.number()
        .min(0)
        .max(100)
        .required(),
      unit: Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      }),
      relate: Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      }),
      scope: Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      }),
    })
    .nullable(true),
  [FieldName.aged]: Yup.array().of(
    Yup.object().shape({
      type: Yup.string()
        // null should be treated as correct option
        .transform(v => (v === null ? 'ok' : v))
        .required(),
      wood: Yup.string()
        // null should be treated as correct option
        .transform(v => (v === null ? 'ok' : v))
        .required(),
      time: Yup.object()
        .shape({
          unit: Yup.object().shape({
            label: Yup.string().required(),
            value: Yup.string().required(),
          }),
          value: Yup.number()
            .min(1)
            .required(),
        })
        .nullable(true),
      previousContent: Yup.array()
        .of(
          Yup.object().shape({
            label: Yup.string().required(),
            value: Yup.string().required(),
          }),
        )
        .min(1)
        .nullable(true),
    }),
  ),
  [FieldName.expirationDate]: Yup.object()
    .shape({
      value: Yup.number()
        .min(1)
        .max(500)
        .required(),
      unit: Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      }),
    })
    .nullable(true),
  // -----------
  [FieldName.ingredientsDescription]: Yup.array().of(
    Yup.object().shape({
      language: Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      }),
      value: Yup.string()
        .min(12)
        .required(),
      complete: Yup.boolean().required(),
    }),
  ),
  [FieldName.ingredientsList]: Yup.array()
    .min(1)
    .nullable(true),
  // -----------
  [FieldName.bitterness]: Yup.number()
    .min(0)
    .max(100)
    .nullable(true),
  [FieldName.sweetness]: Yup.number()
    .min(0)
    .max(100)
    .nullable(true),
  [FieldName.fullness]: Yup.number()
    .min(0)
    .max(100)
    .nullable(true),
  [FieldName.power]: Yup.number()
    .min(0)
    .max(100)
    .nullable(true),
  [FieldName.hoppyness]: Yup.number()
    .min(0)
    .max(100)
    .nullable(true),
  [FieldName.temperature]: Yup.object()
    .shape({
      from: Yup.number()
        .min(0)
        .max(Yup.ref('to'))
        .required(),
      to: Yup.number()
        .min(Yup.ref('from'))
        .max(100)
        .required(),
      unit: Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      }),
    })
    .nullable(true),
  // -----------
  [FieldName.price]: Yup.array().of(
    Yup.object().shape({
      currency: Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      }),
      date: Yup.mixed().test('isCorrectDate', 'wrong date value', value =>
        isValidDate(value),
      ),
      value: Yup.number()
        .min(0)
        .required(),
    }),
  ),
});
