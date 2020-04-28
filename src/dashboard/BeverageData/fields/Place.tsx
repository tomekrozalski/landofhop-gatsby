import React from 'react';

import { FormName } from 'utils/enums';
import { Label } from 'elements';
import { BeverageFieldNames as FieldName } from 'dashboard/utils/enums';
import { Condition, OpenSubform, PlaceSelect } from '../elements';
import { Optional as Grid } from '../elements/grids';

type Props = {
  formName: FormName;
};

const Place: React.FC<Props> = ({ formName }) => {
  const openSubfolder = () => {
    console.log('Open subfolder!');
  };

  return (
    <Grid>
      <Label name={FieldName.place} form={formName} />
      <Condition name={FieldName.place} empty="" />
      <PlaceSelect form={formName} name={FieldName.place} />
      <OpenSubform
        label="dashboard.addNewPlace.openButton"
        onClick={openSubfolder}
      />
    </Grid>
  );
};

export default Place;
