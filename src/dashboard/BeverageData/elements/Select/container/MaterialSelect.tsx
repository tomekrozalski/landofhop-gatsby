import React from 'react';
import { useField } from 'formik';
import { useIntl } from 'gatsby-plugin-intl';

import { FormName } from 'utils/enums';
import {
  ContainerMaterialBottle,
  ContainerMaterialCan,
  ContainerType,
  FieldName,
} from 'dashboard/utils/enums';
import { Select } from '../elements';

type Props = {
  area?: string;
  disabled?: boolean;
  form?: FormName;
  isMulti?: boolean;
  name: FieldName;
  placeholder?: string;
};

const MaterialSelect: React.FC<Props> = ({ name, ...props }) => {
  const { formatMessage } = useIntl();
  const [typeField] = useField(`${name}.type`);

  const getEnum = () => {
    switch (typeField.value.value) {
      case ContainerType.can:
        return ContainerMaterialCan;
      case ContainerType.bottle:
      default:
        return ContainerMaterialBottle;
    }
  };

  return (
    <Select
      {...props}
      name={`${name}.material`}
      options={Object.keys(getEnum()).map(type => ({
        label: formatMessage({
          id: `beverage.details.container.material.${type}`,
        }),
        value: type,
      }))}
    />
  );
};

export default MaterialSelect;
