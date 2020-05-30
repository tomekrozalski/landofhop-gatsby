import React, { useState } from 'react';

import { FormName } from 'utils/enums';
import { Label } from 'elements';
import { FieldName } from 'dashboard/utils/enums';
import { Modal } from 'dashboard/elements';
import { Optional as Grid } from '../../elements/grids';
import { Condition, OpenSubform, PlaceSelect } from '../../elements';
import { Subform } from '.';

type Props = {
  fieldName: FieldName;
  formName: FormName;
};

const Place: React.FC<Props> = ({ fieldName, formName }) => {
  const [subform, setSubform] = useState(false);
  const close = () => setSubform(false);

  return (
    <>
      <Grid>
        <Label name={fieldName} form={formName} />
        <Condition name={fieldName} empty="" />
        <PlaceSelect form={formName} name={fieldName} />
        <OpenSubform
          label="dashboard.addNewPlace.openButton"
          onClick={() => setSubform(true)}
        />
      </Grid>
      {subform && (
        <Modal close={close}>
          <Subform close={close} />
        </Modal>
      )}
    </>
  );
};

export default Place;
