import { IntlShape } from 'react-intl';

import { BeverageFieldNames as FieldName } from 'dashboard/utils/enums';
import { producer as initialValues } from '../../initialValues';
import { BeverageType } from '../../Beverage.type';

type Props = {
  data: BeverageType;
  intl: IntlShape;
  languages: any[];
};

const dataToEditorialForm = ({ data, intl, languages }: Props) => {
  const { notes } = data;

  console.log('dataToEditorialForm', data);

  return {
    ...initialValues,
    ...(notes && {
      [FieldName.notes]: notes,
    }),
  };
};

export default dataToEditorialForm;
