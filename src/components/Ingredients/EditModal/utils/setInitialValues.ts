import { IngredientFieldNames as FieldName } from 'dashboard/utils/enums';

import { normalizeLanguage } from 'dashboard/utils/contexts/Navigation/helpers';
import { Ingredient } from '../../utils/types';
import { FormValues } from './FormValues.type';

type Props = {
  intl: any;
  values: Ingredient;
};

const setInitialValues = ({ intl, values }: Props): FormValues => {
  console.log('values', values);

  return {
    [FieldName.badge]: values.badge,
    [FieldName.name]: values.name.map(({ language, value }) => ({
      lang: normalizeLanguage({ languages: language, intl }),
      value,
    })),
    [FieldName.type]: {
      label: '',
      value: values.type,
    },
    [FieldName.parent]: {
      label: '',
      value: '',
    },
  };
};

export default setInitialValues;
