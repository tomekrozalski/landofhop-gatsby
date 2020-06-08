import React, { useContext } from 'react';

import { FormName } from 'utils/enums';
import { Label } from 'elements';
import { FieldName, Subform as SubformEnum } from 'dashboard/utils/enums';
import { NavigationContext } from 'dashboard/utils/contexts';
import { InstitutionSelect, OpenSubform } from '../../elements';
import { Basic as Grid } from '../../elements/grids';

type Props = {
  fieldName: FieldName;
  formName: FormName;
  required?: boolean;
};

const Brand: React.FC<Props> = ({ fieldName, formName, required = false }) => {
  const { setSubform } = useContext(NavigationContext);

  return (
    <Grid>
      <Label name={fieldName} form={formName} required={required} />
      <InstitutionSelect name={fieldName} form={formName} />
      <OpenSubform
        label="dashboard.addNewInstitution.openButton"
        onClick={() => setSubform(SubformEnum.institution)}
      />
    </Grid>
  );
};

export default Brand;
