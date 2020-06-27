import * as Yup from 'yup';

// import { constants } from 'utils';
// import { isValidDate } from 'dashboard/beverage/utils';
import { BeverageFieldNames as FieldName } from 'dashboard/utils/enums';

export default Yup.object().shape({
  [FieldName.tale]: Yup.array().of(
    Yup.object().shape({
      lang: Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      }),
      value: Yup.string()
        .min(12)
        .required(),
    }),
  ),
});
