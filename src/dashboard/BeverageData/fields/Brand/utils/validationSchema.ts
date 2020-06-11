import * as Yup from 'yup';

import { InstitutionFieldNames as FieldName } from 'dashboard/utils/enums';

export default Yup.object().shape({
  [FieldName.badge]: Yup.string()
    .matches(/^[a-z\d-]+$/)
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
  [FieldName.ownedBy]: Yup.object()
    .shape({
      label: Yup.string().required(),
      value: Yup.string().required(),
    })
    .nullable(true),
  [FieldName.website]: Yup.string()
    .transform(v => (v === null ? 'http://www.test.com' : v))
    .url()
    .required(),
});
