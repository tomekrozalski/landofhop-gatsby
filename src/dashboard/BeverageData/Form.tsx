import React, { useContext } from 'react';

import { FormName } from 'utils/enums';
import { NavigationContext } from 'dashboard/utils/contexts';
import { Label } from '.';

const Form: React.FC = () => {
  const { part } = useContext(NavigationContext);

  switch (part) {
    case FormName.beverageProducer:
      return <div>producer</div>;
    case FormName.beverageLabel:
    default:
      return <Label />;
  }
};

export default Form;
