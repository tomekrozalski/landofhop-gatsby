import { FormikHelpers } from 'formik';
import { Dispatch } from 'redux';

import formatData, {
  Input as InputType,
  Output as OutputType,
} from './formatData';
import { FormValues } from './FormValues.type';

type Props = {
  addNewPlace: ({
    token,
    values,
  }: {
    token: string;
    values: OutputType;
  }) => Promise<any>;
  close: () => void;
  dispatch: Dispatch<any>;
  token: string;
};

const onSubmit = ({ addNewPlace, close, dispatch, token }: Props) => (
  values: FormValues,
  { setSubmitting }: FormikHelpers<FormValues>,
) => {
  const formattedValues = formatData(values as InputType);

  dispatch(addNewPlace({ token, values: formattedValues })).finally(() => {
    setSubmitting(false);
    close();
  });
};

export default onSubmit;
