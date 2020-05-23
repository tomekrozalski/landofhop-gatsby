import React from 'react';

import { FormName } from 'utils/enums';
import { Label } from 'elements';
import { FieldName } from 'dashboard/utils/enums';
import { InstitutionSelect, OpenSubform } from '../elements';
import { Basic as Grid } from '../elements/grids';

type Props = {
  fieldName: FieldName;
  formName: FormName;
  required?: boolean;
};

const Brand: React.FC<Props> = ({ fieldName, formName, required = false }) => {
  const openSubfolder = () => {
    console.log('Open subfolder!');
  };

  return (
    <Grid>
      <Label name={fieldName} form={formName} required={required} />
      <InstitutionSelect name={fieldName} form={formName} />
      <OpenSubform
        label="dashboard.addNewInstitution.openButton"
        onClick={openSubfolder}
      />
    </Grid>
  );
};

export default Brand;
