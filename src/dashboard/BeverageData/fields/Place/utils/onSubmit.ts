import { FormikHelpers } from 'formik';

import formatData, {
  Input as InputType,
  Output as OutputType,
} from './formatData';
import { FormValues } from './FormValues.type';

type Props = {
  addNewPlace: (data: OutputType) => Promise<any>;
};

const onSubmit = ({ addNewPlace }: Props) => (
  values: FormValues,
  { setSubmitting }: FormikHelpers<FormValues>,
) => {
  const formattedValues = formatData(values as InputType);

  addNewPlace(formattedValues).finally(() => {
    setSubmitting(false);
  });
};

export default onSubmit;
