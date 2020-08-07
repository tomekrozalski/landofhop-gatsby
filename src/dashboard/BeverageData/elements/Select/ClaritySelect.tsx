import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { FormName } from 'utils/enums';
import { Clarity } from 'components/BeverageDetails/utils/enums';
import { Select } from './elements';

type Props = {
  area?: string;
  form?: FormName;
  name: string;
  placeholder?: string;
};

const ClaritySelect: React.FC<Props> = props => {
  const { formatMessage } = useIntl();
  const values = Object.keys(Clarity);

  return (
    <Select
      {...props}
      options={values.map(value => ({
        label: formatMessage({ id: `beverage.details.clarity.${value}` }),
        value,
      }))}
    />
  );
};

export default ClaritySelect;
