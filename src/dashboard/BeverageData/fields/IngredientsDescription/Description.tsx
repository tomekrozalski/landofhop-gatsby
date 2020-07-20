import React from 'react';
import styled from 'styled-components';

import { FormName } from 'utils/enums';
import { TextInput } from 'elements';
import { FieldName } from 'dashboard/utils/enums';
import { LanguageSelect } from '../../elements';

const Wrapper = styled.div`
  grid-column: 2 / 3;
  grid-row: span 2;
`;

type Props = {
  fieldName: FieldName;
  formName: FormName;
  index: number;
};

const Description: React.FC<Props> = ({ fieldName, formName, index }) => (
  <Wrapper>
    <TextInput name={`${fieldName}.${index}.value`} form={formName} textarea />
    <LanguageSelect
      name={`${fieldName}.${index}.lang`}
      placeholder="selectLanguage"
    />
  </Wrapper>
);

export default Description;
