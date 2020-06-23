import React, { useEffect, useState } from 'react';
import { useField } from 'formik';
import { useIntl } from 'gatsby-plugin-intl';

import { FormName } from 'utils/enums';
import {
  ContainerColorBottle,
  ContainerColorCan,
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

const TypeSelect: React.FC<Props> = ({ name, ...props }) => {
  const [loaded, setLoaded] = useState(false);
  const { formatMessage } = useIntl();
  const [typeField] = useField(`${name}.type`);
  const materialField = useField(`${name}.material`);
  const colorField = useField(`${name}.color`);

  useEffect(() => {
    if (loaded) {
      materialField[2].setValue({
        ...(typeField.value.value === ContainerType.bottle && {
          label: formatMessage({
            id: `beverage.details.container.material.${ContainerMaterialBottle.glass}`,
          }),
          value: ContainerMaterialBottle.glass,
        }),
        ...(typeField.value.value === ContainerType.can && {
          label: formatMessage({
            id: `beverage.details.container.material.${ContainerMaterialCan.aluminum}`,
          }),
          value: ContainerMaterialCan.aluminum,
        }),
      });

      colorField[2].setValue({
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

    setLoaded(true);
  }, [typeField.value]);

  return (
    <Select
      {...props}
      name={`${name}.type`}
      options={Object.keys(ContainerType).map(type => ({
        label: formatMessage({ id: `beverage.details.container.type.${type}` }),
        value: type,
      }))}
    />
  );
};

export default TypeSelect;
