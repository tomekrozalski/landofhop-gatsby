import React from 'react';
import { useField } from 'formik';
import { useIntl } from 'gatsby-plugin-intl';

import { FormName } from 'utils/enums';
import {
  ContainerColorBottle,
  ContainerColorCan,
  ContainerType,
} from 'components/BeverageDetails/utils/enums';
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

const ColorSelect: React.FC<Props> = ({ name, ...props }) => {
  const { formatMessage } = useIntl();
  const [typeField] = useField(`${name}.type`);

  const getEnum = () => {
    switch (typeField.value.value) {
      case ContainerType.can:
        return ContainerColorCan;
      case ContainerType.bottle:
      default:
        return ContainerColorBottle;
    }
  };

  return (
    <Select
      {...props}
      name={`${name}.color`}
      options={Object.keys(getEnum()).map(type => ({
        label: formatMessage({
          id: `beverage.details.container.color.${type}`,
        }),
        value: type,
      }))}
    />
  );
};

export default ColorSelect;
