import React, { useEffect, useState } from 'react';
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
  const [loaded, setLoaded] = useState(false);
  const [, , { setValue }] = useField(`${name}.color`);
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
    if (loaded) {
      if (typeField.value.value === ContainerType.bottle) {
        setValue({
          label: formatMessage({
            id: `beverage.details.container.color.${ContainerColorBottle.brown}`,
          }),
          value: ContainerColorBottle.brown,
        });
      }

      if (typeField.value.value === ContainerType.can) {
        setValue({
          label: formatMessage({
            id: `beverage.details.container.color.${ContainerColorCan.silver}`,
          }),
          value: ContainerColorCan.silver,
        });
      }
    }

    setLoaded(true);
  }, [typeField.value]);

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
