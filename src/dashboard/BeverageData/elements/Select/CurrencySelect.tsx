import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { FormName } from 'utils/enums';
import { Currency } from 'components/BeverageDetails/utils/enums';
import { Select } from './elements';

type Props = {
  area?: string;
  form?: FormName;
  name: string;
  placeholder?: string;
};

const CurrencySelect: React.FC<Props> = props => {
  const { formatMessage } = useIntl();
  const values = Object.keys(Currency);

  return (
    <Select
      {...props}
      options={values.map(value => ({
        label: formatMessage({ id: `global.currency.${value}` }),
        value,
      }))}
    />
  );
};

export default CurrencySelect;
