import * as Yup from 'yup';

import { BeverageFieldNames as FieldName } from 'dashboard/utils/enums';
import { isValidDateTime } from 'dashboard/utils/helpers';
import {
  AlcoholScope as AlcoholScopeEnum,
  Clarity as ClarityEnum,
  Fermentation as FermentationEnum,
} from 'components/BeverageDetails/utils/enums';

export default Yup.object().shape({
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
  [FieldName.alcoholScope]: Yup.object()
    .shape({
      label: Yup.string().required(),
      value: Yup.mixed()
        .oneOf(Object.values(AlcoholScopeEnum))
        .required(),
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
  // -----------
  [FieldName.color]: Yup.string()
    // null should be treated as correct option
    .transform(v => (v === null ? '#123457' : v))
    .matches(/^#[0-9abcdef]{6}$/)
    .required(),
  [FieldName.clarity]: Yup.object()
    .shape({
      label: Yup.string().required(),
      value: Yup.mixed()
        .oneOf(Object.values(ClarityEnum))
        .required(),
    })
    .nullable(true),
  // -----------
  [FieldName.added]: Yup.mixed().test(
    'isCorrectDate',
    'wrong datetime value',
    value => isValidDateTime(value, { nullable: true }),
  ),
  [FieldName.updated]: Yup.mixed().test(
    'isCorrectDate',
    'wrong datetime value',
    value => isValidDateTime(value, { nullable: true }),
  ),
  [FieldName.notes]: Yup.string()
    .min(3)
    .nullable(true),
});
