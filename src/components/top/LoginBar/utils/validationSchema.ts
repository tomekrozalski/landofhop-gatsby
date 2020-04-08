import * as Yup from 'yup';

import FieldName from './FieldName.enum';

export default Yup.object().shape({
  [FieldName.email]: Yup.string()
    .email()
    .required(),
  [FieldName.password]: Yup.string()
    .min(5)
    .required(),
});
