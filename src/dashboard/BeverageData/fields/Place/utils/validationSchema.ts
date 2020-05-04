import * as Yup from 'yup';

import { PlaceFieldNames as FieldName } from 'dashboard/utils/enums';

export default Yup.object().shape({
  [FieldName.city]: Yup.array()
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
});
