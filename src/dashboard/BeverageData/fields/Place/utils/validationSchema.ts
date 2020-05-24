import * as Yup from 'yup';
import isNull from 'lodash/isNull';
import isNumber from 'lodash/isNumber';

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
  [FieldName.country]: Yup.object().shape({
    label: Yup.string().required(),
    value: Yup.string().required(),
  }),
  [FieldName.institution]: Yup.object().shape({
    label: Yup.string().required(),
    value: Yup.string().required(),
  }),
  [FieldName.longitude]: Yup.mixed().test(
    'is-longitude',
    'is not correct longitude',
    value =>
      isNull(value) || (isNumber(value) && value >= -180 && value <= 180),
  ),
  [FieldName.latitude]: Yup.mixed().test(
    'is-latitude',
    'is not correct latitude',
    value =>
      isNull(value) || (isNumber(value) && value >= -180 && value <= 180),
  ),
});
