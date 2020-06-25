import React, { useContext } from 'react';

import { FormName } from 'utils/enums';
import { NavigationContext } from 'dashboard/utils/contexts';
import { Editorial, Label, Producer } from '.';

const Form: React.FC = () => {
  const { part } = useContext(NavigationContext);

  switch (part) {
    case FormName.beverageLabel:
      return <Label />;
    case FormName.beverageProducer:
      return <Producer />;
    case FormName.beverageEditorial:
      return <Editorial />;
    default:
      return null;
  }
};

export default Form;
