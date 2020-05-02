import React, { useState } from 'react';
import styled from 'styled-components';

import { FormName } from 'utils/enums';
import { Label } from 'elements';
import { Danger } from 'elements/icons';
import { BeverageFieldNames as FieldName } from 'dashboard/utils/enums';
import { Condition, OpenSubform, PlaceSelect } from '../elements';
import { Optional as Grid } from '../elements/grids';

const Backdrop = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--index-backdrop);
`;

const Modal = styled.div`
  display: block;
  width: var(--size-container-max-width);
  height: 400px;
  background-color: var(--color-white);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: var(--index-modal);
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  background-color: var(--color-black);
  border-radius: 50%;
  position: absolute;
  top: -2rem;
  right: -2rem;

  svg {
    width: 1.5rem;

    path {
      fill: var(--color-bright);
      transition: fill var(--transition-default);
    }
  }

  :hover svg path {
    fill: var(--color-white);
  }
`;

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
        <Backdrop>
          <Modal>
            <CloseButton onClick={() => setSubform(false)}>
              <Danger />
            </CloseButton>
            Modal
          </Modal>
        </Backdrop>
      )}
    </>
  );
};

export default Place;
