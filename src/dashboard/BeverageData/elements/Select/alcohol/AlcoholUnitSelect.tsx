import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { FormName } from 'utils/enums';
import { AlcoholUnit } from 'components/BeverageDetails/utils/enums';
import { Select } from '../elements';

type Props = {
  disabled?: boolean;
  form?: FormName;
  name: string;
  placeholder?: string;
};

const AlcoholUnitSelect: React.FC<Props> = props => {
  const { formatMessage } = useIntl();
  const units = Object.keys(AlcoholUnit);

  return (
    <Select
      {...props}
      options={units.map(value => ({
        label: formatMessage({ id: `global.alcoholUnit.${value}` }),
        value,
      }))}
      placeholder="short"
    />
  );
};

export default AlcoholUnitSelect;
