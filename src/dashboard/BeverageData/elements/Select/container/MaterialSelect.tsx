import React, { useEffect, useState } from 'react';
import { useField } from 'formik';
import { useIntl } from 'gatsby-plugin-intl';

import { FormName } from 'utils/enums';
import {
  ContainerMaterialBottle,
  ContainerMaterialCan,
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

const MaterialSelect: React.FC<Props> = ({ name, ...props }) => {
  const { formatMessage } = useIntl();
  const [loaded, setLoaded] = useState(false);
  const [, , { setValue }] = useField(`${name}.material`);
  const [typeField] = useField(`${name}.type`);

  const getEnum = () => {
    if (typeField.value) {
      switch (typeField.value.value) {
        case ContainerType.can:
          return ContainerMaterialCan;
        case ContainerType.bottle:
        default:
          return ContainerMaterialBottle;
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
            id: `beverage.details.container.material.${ContainerMaterialBottle.glass}`,
          }),
          value: ContainerMaterialBottle.glass,
        });
      }

      if (typeField.value.value === ContainerType.can) {
        setValue({
          label: formatMessage({
            id: `beverage.details.container.material.${ContainerMaterialCan.aluminum}`,
          }),
          value: ContainerMaterialCan.aluminum,
        });
      }
    }

    setLoaded(true);
  }, [typeField.value]);

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
