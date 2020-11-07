import * as Yup from 'yup';

import { IngredientFieldNames as FieldName } from 'dashboard/utils/enums';

export default Yup.object().shape({
  [FieldName.badge]: Yup.string()
    .min(3)
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
          .min(1)
          .required(),
      }),
    )
    .required()
    .min(1),
  [FieldName.type]: Yup.object().shape({
    label: Yup.string().required(),
    value: Yup.string().required(),
  }),
});
