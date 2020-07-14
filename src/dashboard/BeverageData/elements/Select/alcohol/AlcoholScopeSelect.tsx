import React from 'react';

import { FormName } from 'utils/enums';
import { AlcoholScope } from 'components/BeverageDetails/utils/enums';
import { Select } from '../elements';

type Props = {
  disabled?: boolean;
  form?: FormName;
  name: string;
  placeholder?: string;
};

const AlcoholScopeSelect: React.FC<Props> = props => (
  <Select
    {...props}
    options={[
      {
        label: '--',
        value: '-',
      },
      {
        label: '~ <0.5%',
        value: AlcoholScope.lessThan05,
      },
      {
        label: '~ ±0.5%',
        value: AlcoholScope.plusMinus05,
      },
      {
        label: '~ ±1.0%',
        value: AlcoholScope.plusMinus1,
      },
    ]}
  />
);

export default AlcoholScopeSelect;
