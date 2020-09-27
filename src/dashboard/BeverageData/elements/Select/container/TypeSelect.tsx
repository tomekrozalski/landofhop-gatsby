import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { FormName } from 'utils/enums';
import { ContainerType } from 'components/BeverageDetails/utils/enums';
import { FieldName } from 'dashboard/utils/enums';
import { Select } from '../elements';

type Props = {
  area?: string;
  disabled?: boolean;
  form?: FormName;
  isMulti?: boolean;
  name: FieldName;
  placeholder?: string;
};

const TypeSelect: React.FC<Props> = ({ name, ...props }) => {
  const { formatMessage } = useIntl();

  return (
    <Select
      {...props}
      name={`${name}.type`}
      options={Object.keys(ContainerType)
        .filter(type => type !== ContainerType.undefined)
        .map(type => ({
          label: formatMessage({
            id: `beverage.details.container.type.${type}`,
          }),
          value: type,
        }))}
    />
  );
};

export default TypeSelect;
