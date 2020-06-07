import * as Yup from 'yup';

import { CountryFieldNames as FieldName } from 'dashboard/utils/enums';

export default Yup.object().shape({
  [FieldName.code]: Yup.string()
    .matches(/^[a-z]{2}$/)
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
