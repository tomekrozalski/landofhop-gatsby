import React, { useEffect } from 'react';
import { useField } from 'formik';
import { useIntl } from 'gatsby-plugin-intl';
import isEqual from 'lodash/isEqual';

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
  const [colorField, , { setValue }] = useField(`${name}.color`);
  const [typeField] = useField(`${name}.type`);

  const getEnum = () => {
    if (typeField.value) {
      switch (typeField.value.value) {
        case ContainerType.can:
          return ContainerColorCan;
        case ContainerType.bottle:
        default:
          return ContainerColorBottle;
      }
    } else {
      return [];
    }
  };

  useEffect(() => {
    if (typeField.value) {
      setValue({
        ...(typeField.value.value === ContainerType.bottle && {
          label: formatMessage({
            id: `beverage.details.container.color.${ContainerColorBottle.brown}`,
          }),
          value: ContainerColorBottle.brown,
        }),
        ...(typeField.value.value === ContainerType.can && {
          label: formatMessage({
            id: `beverage.details.container.color.${ContainerColorCan.silver}`,
          }),
          value: ContainerColorCan.silver,
        }),
      });
    }
  }, [typeField.value]);

  return (
    <Select
      {...props}
      disabled={isEqual(colorField.value, { value: '' })}
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
