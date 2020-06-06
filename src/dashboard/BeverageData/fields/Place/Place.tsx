import React, { useContext } from 'react';

import { FormName } from 'utils/enums';
import { Label } from 'elements';
import { FieldName, Subform as SubformEnum } from 'dashboard/utils/enums';
import { NavigationContext } from 'dashboard/utils/contexts';
import { Optional as Grid } from '../../elements/grids';
import { Condition, OpenSubform, PlaceSelect } from '../../elements';

type Props = {
  fieldName: FieldName;
  formName: FormName;
};

const Place: React.FC<Props> = ({ fieldName, formName }) => {
  const { setSubform } = useContext(NavigationContext);

  return (
    <Grid>
      <Label name={fieldName} form={formName} />
      <Condition name={fieldName} empty="" />
      <PlaceSelect form={formName} name={fieldName} />
      <OpenSubform
        label="dashboard.addNewPlace.openButton"
        onClick={() => setSubform(SubformEnum.place)}
      />
    </Grid>
  );
};

export default Place;
