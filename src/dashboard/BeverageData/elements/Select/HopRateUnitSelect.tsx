import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { FormName } from 'utils/enums';
import { HopRateUnit } from 'components/BeverageDetails/utils/enums';
import { Select } from './elements';

type Props = {
  disabled?: boolean;
  form?: FormName;
  name: string;
  placeholder?: string;
};

const HopRateUnitSelect: React.FC<Props> = props => {
  const { formatMessage } = useIntl();
  const timeUnits = Object.keys(HopRateUnit);

  return (
    <Select
      {...props}
      options={timeUnits.map(value => ({
        label: formatMessage({ id: `global.hopRateUnit.${value}` }),
        value,
      }))}
    />
  );
};

export default HopRateUnitSelect;
