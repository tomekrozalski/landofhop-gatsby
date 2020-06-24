import React, { useContext } from 'react';

import { FormName } from 'utils/enums';
import { NavigationContext } from 'dashboard/utils/contexts';
import { Label, Producer } from '.';

const Form: React.FC = () => {
  const { part } = useContext(NavigationContext);

  switch (part) {
    case FormName.beverageLabel:
      return <Label />;
    case FormName.beverageProducer:
      return <Producer />;
    default:
      return null;
  }
};

export default Form;
