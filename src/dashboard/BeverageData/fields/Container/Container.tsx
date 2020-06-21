import React from 'react';

import { FormName } from 'utils/enums';
import { Label, TextInput } from 'elements';
import { FieldName } from 'dashboard/utils/enums';
import { Five as Grid } from '../../elements/grids';
import {
  ContainerColorSelect,
  ContainerMaterialSelect,
  ContainerTypeSelect,
  ContainerUnitSelect,
} from '../../elements';

type Props = {
  disabled?: boolean;
  fieldName: FieldName;
  formName: FormName;
  required?: boolean;
};

const Container: React.FC<Props> = ({
  fieldName,
  formName,
  required = false,
}) => (
  <Grid>
    <Label name={fieldName} form={formName} required={required} />
    <ContainerTypeSelect form={formName} name={fieldName} />
    <ContainerMaterialSelect form={formName} name={fieldName} />
    <ContainerColorSelect form={formName} name={fieldName} />
    <TextInput name={`${fieldName}.value`} form={formName} type="number" />
    <ContainerUnitSelect form={formName} name={fieldName} />
  </Grid>
);

export default Container;
