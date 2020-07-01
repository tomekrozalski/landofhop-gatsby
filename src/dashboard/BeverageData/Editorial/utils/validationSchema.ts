import * as Yup from 'yup';

import { isValidDate } from 'dashboard/utils/helpers';
import { BeverageFieldNames as FieldName } from 'dashboard/utils/enums';

export default Yup.object().shape({
  [FieldName.added]: Yup.mixed().test('isCorrectDate', '', value =>
    isValidDate(value, { nullable: true }),
  ),
  [FieldName.updated]: Yup.mixed().test('isCorrectDate', '', value =>
    isValidDate(value, { nullable: true }),
  ),
  [FieldName.notes]: Yup.string()
    .min(3)
    .nullable(true),
});
