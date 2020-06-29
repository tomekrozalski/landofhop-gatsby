import { IntlShape } from 'react-intl';

import { BeverageFieldNames as FieldName } from 'dashboard/utils/enums';
import { normalizeLanguageValuePair as normalizeLanguageValuePairHelper } from '../../helpers';
import { producer as initialValues } from '../../initialValues';
import { BeverageType } from '../../Beverage.type';

type Props = {
  data: BeverageType;
  intl: IntlShape;
  languages: any[];
};

const dataToProducerForm = ({ data, intl, languages }: Props) => {
  const {
    badge,
    barcode,
    brand,
    container,
    contract,
    cooperation,
    name,
    place,
    series,
    tale,
  } = data;

  console.log('dataToProducerForm', data);

  const normalizeLanguageValuePair = normalizeLanguageValuePairHelper({
    intl,
    languages,
  });

  return {
    ...initialValues,
    ...(tale?.producer && {
      [FieldName.tale]: tale.producer.map(normalizeLanguageValuePair),
    }),
  };
};

export default dataToProducerForm;
