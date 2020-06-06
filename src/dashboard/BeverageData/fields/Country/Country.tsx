import React, { useContext } from 'react';

import { FormName } from 'utils/enums';
import { Label } from 'elements';
import { FieldName, Subform as SubformEnum } from 'dashboard/utils/enums';
import { NavigationContext } from 'dashboard/utils/contexts';
import { CountrySelect, OpenSubform } from '../../elements';
import { Basic as Grid } from '../../elements/grids';

type Props = {
  fieldName: FieldName;
  formName: FormName;
  required?: boolean;
};

const Country: React.FC<Props> = ({
  fieldName,
  formName,
  required = false,
}) => {
  const { setSubform } = useContext(NavigationContext);

  return (
    <Grid>
      <Label name={fieldName} form={formName} required={required} />
      <CountrySelect form={formName} name={fieldName} />
      <OpenSubform
        label="dashboard.addNewCountry.openButton"
        onClick={() => setSubform(SubformEnum.country)}
      />
    </Grid>
  );
};

export default Country;
