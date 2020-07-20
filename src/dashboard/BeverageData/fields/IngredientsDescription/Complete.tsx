import React from 'react';
import styled from 'styled-components';

import { FormName } from 'utils/enums';
import { Label } from 'elements';
import { FieldName } from 'dashboard/utils/enums';
import { StyledSwitch } from '../../elements';

type Props = {
  fieldName: FieldName;
  formName: FormName;
  index: number;
};

const Wrapper = styled.div`
  grid-column: 1 / 3;
  grid-row: span 2;
  display: grid;
  grid-gap: 1rem;
  margin-bottom: 1rem;
  grid-template-columns:
    repeat(2, 45rem) repeat(2, var(--size-input-height))
    1fr;
`;

const Complete: React.FC<Props> = ({ fieldName, formName, index }) => (
  <Wrapper>
    <Label form={formName} name="areIngredientsComplete" />
    <StyledSwitch name={`${fieldName}.${index}.complete`} form={formName} />
  </Wrapper>
);

export default Complete;
