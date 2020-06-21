import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { FormName } from 'utils/enums';
import { ContainerUnit, FieldName } from 'dashboard/utils/enums';
import { Select } from '../elements';

type Props = {
  area?: string;
  disabled?: boolean;
  form?: FormName;
  isMulti?: boolean;
  name: FieldName;
  placeholder?: string;
};

const UnitSelect: React.FC<Props> = ({ name, ...props }) => {
  const { formatMessage } = useIntl();

  return (
    <Select
      {...props}
      name={`${name}.unit`}
      options={Object.keys(ContainerUnit).map(type => ({
        label: formatMessage({ id: `beverage.details.container.unit.${type}` }),
        value: type,
      }))}
    />
  );
};

export default UnitSelect;
