import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { FormName } from 'utils/enums';
import { TemperatureUnit } from 'components/BeverageDetails/utils/enums';
import { Select } from './elements';

type Props = {
  form?: FormName;
  name: string;
  placeholder?: string;
};

const TemperatureUnitSelect: React.FC<Props> = props => {
  const { formatMessage } = useIntl();
  const units = Object.keys(TemperatureUnit);

  return (
    <Select
      {...props}
      options={units.map(value => ({
        label: formatMessage({ id: `global.temperatureUnit.${value}` }),
        value,
      }))}
    />
  );
};

export default TemperatureUnitSelect;
