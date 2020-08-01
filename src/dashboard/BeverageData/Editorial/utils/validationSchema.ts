import * as Yup from 'yup';

import { isValidDateTime } from 'dashboard/utils/helpers';
import { BeverageFieldNames as FieldName } from 'dashboard/utils/enums';

export default Yup.object().shape({
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
