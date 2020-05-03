import React, { useState } from 'react';

import { FormName } from 'utils/enums';
import { Label } from 'elements';

import { BeverageFieldNames as FieldName } from 'dashboard/utils/enums';
import { Modal } from 'dashboard/elements';
import { Optional as Grid } from '../../elements/grids';
import { Condition, OpenSubform, PlaceSelect } from '../../elements';
import { Subform } from '.';

type Props = {
  formName: FormName;
};

const Place: React.FC<Props> = ({ formName }) => {
  const [subform, setSubform] = useState(false);

  return (
    <>
      <Grid>
        <Label name={FieldName.place} form={formName} />
        <Condition name={FieldName.place} empty="" />
        <PlaceSelect form={formName} name={FieldName.place} />
        <OpenSubform
          label="dashboard.addNewPlace.openButton"
          onClick={() => setSubform(true)}
        />
      </Grid>
      {subform && (
        <Modal close={() => setSubform(false)}>
          <Subform />
        </Modal>
      )}
    </>
  );
};

export default Place;
