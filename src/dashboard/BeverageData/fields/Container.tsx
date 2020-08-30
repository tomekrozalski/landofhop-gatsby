import React from 'react';
import { useField } from 'formik';

import { FormName } from 'utils/enums';
import { Label, TextInput } from 'elements';
import { ContainerType } from 'components/BeverageDetails/utils/enums';
import { FieldName } from 'dashboard/utils/enums';
import { Three as Grid } from '../elements/grids';
import {
  ContainerColorSelect,
  ContainerMaterialSelect,
  ContainerTypeSelect,
  ContainerUnitSelect,
  StyledSwitch,
} from '../elements';

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
}) => {
  const [type] = useField(`${fieldName}.type`);

  return (
    <Grid>
      <Label name={fieldName} form={formName} required={required} />
      <ContainerTypeSelect area="2 / 3" form={formName} name={fieldName} />
      <ContainerMaterialSelect area="3 / 4" form={formName} name={fieldName} />
      <ContainerColorSelect area="4 / 5" form={formName} name={fieldName} />
      <TextInput
        area="2 / 3"
        name={`${fieldName}.value`}
        form={formName}
        type="number"
      />
      <ContainerUnitSelect area="3 / 4" form={formName} name={fieldName} />
      {type.value.value === ContainerType.bottle && (
        <>
          <Label name="hasCork" form={formName} />
          <StyledSwitch name={`${fieldName}.hasCork`} form={formName} />
          <Label name="hasCapWireFlip" form={formName} />
          <StyledSwitch name={`${fieldName}.hasCapWireFlip`} form={formName} />
        </>
      )}
    </Grid>
  );
};

export default Container;
