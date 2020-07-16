import React, { useEffect } from 'react';
import { useField } from 'formik';
import { useIntl } from 'gatsby-plugin-intl';

import { FormName } from 'utils/enums';
import { ContainerUnit } from 'components/BeverageDetails/utils/enums';
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

const UnitSelect: React.FC<Props> = ({ name, ...props }) => {
  const { formatMessage } = useIntl();
  const [unitField, , { setValue }] = useField(`${name}.unit`);

  useEffect(() => {
    if (!unitField.value?.label) {
      setValue({
        label: formatMessage({
          id: `beverage.details.container.unit.${ContainerUnit.ml}`,
        }),
        value: ContainerUnit.ml,
      });
    }
  }, []);

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
