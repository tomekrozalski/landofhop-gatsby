import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { FormName } from 'utils/enums';
import { ExpirationDateUnit } from 'components/BeverageDetails/utils/enums';
import { Select } from '../elements';

type Props = {
  disabled?: boolean;
  form?: FormName;
  name: string;
  placeholder?: string;
};

const ExpirationDateUnitSelect: React.FC<Props> = props => {
  const { formatMessage } = useIntl();
  const timeUnits = Object.keys(ExpirationDateUnit);

  return (
    <Select
      {...props}
      options={timeUnits.map(value => ({
        label: formatMessage({ id: `global.timeUnit.${value}` }),
        value,
      }))}
    />
  );
};

export default ExpirationDateUnitSelect;
