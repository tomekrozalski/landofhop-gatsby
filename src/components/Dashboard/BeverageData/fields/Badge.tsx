import React from 'react';

import { FormName } from 'utils/enums';
import { getAnchor } from 'utils/helpers';
import { Label, TextInput } from 'elements';

type Props = {
  fieldName: string;
  formName: FormName;
};

const Badge: React.FC<Props> = props => (
  <>
    <Label {...props} span="1 / 3" />
    <TextInput name={getAnchor(props)} span="3 / 5" />
  </>
);

export default Badge;
