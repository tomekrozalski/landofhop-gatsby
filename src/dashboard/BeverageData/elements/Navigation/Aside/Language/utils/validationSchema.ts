import * as Yup from 'yup';

import { LanguageFieldNames as FieldName } from 'dashboard/utils/enums';

export default (codes: string[]) =>
  Yup.object().shape({
    [FieldName.code]: Yup.string()
      .matches(/^[a-z]{2}$/)
      .test(
        'is-taken',
        'the code is already taken',
        value => !codes.find(code => code === value),
      )
      .required(),
    [FieldName.name]: Yup.array()
      .of(
        Yup.object().shape({
          lang: Yup.object().shape({
            label: Yup.string().required(),
            value: Yup.string().required(),
          }),
          value: Yup.string()
            .min(3)
            .required(),
        }),
      )
      .required()
      .min(1),
  });
