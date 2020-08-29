import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { FormName } from 'utils/enums';
import { ExtractUnit } from 'components/BeverageDetails/utils/enums';
import { Select } from '../elements';

type Props = {
  disabled?: boolean;
  form?: FormName;
  name: string;
  placeholder?: string;
};

const ExtractUnitSelect: React.FC<Props> = props => {
  const { formatMessage } = useIntl();
  const units = Object.keys(ExtractUnit);

  return (
    <Select
      {...props}
      options={units.map(value => ({
        label: formatMessage({ id: `global.extractUnit.${value}` }),
        value,
      }))}
      placeholder="short"
    />
  );
};

export default ExtractUnitSelect;
