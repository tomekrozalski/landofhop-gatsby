import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { FormName } from 'utils/enums';
import { AlcoholScope } from 'components/BeverageDetails/utils/enums';
import { Select } from '../elements';

type Props = {
  disabled?: boolean;
  form?: FormName;
  name: string;
  placeholder?: string;
};

const AlcoholScopeSelect: React.FC<Props> = props => {
  const { formatMessage } = useIntl();

  return (
    <Select
      {...props}
      options={[
        {
          label: '--',
          value: '-',
        },
        {
          label: formatMessage({
            id: `global.alcoholScopeValues.${AlcoholScope.lessThan05}`,
          }),
          value: AlcoholScope.lessThan05,
        },
        {
          label: formatMessage({
            id: `global.alcoholScopeValues.${AlcoholScope.plusMinus05}`,
          }),
          value: AlcoholScope.plusMinus05,
        },
        {
          label: formatMessage({
            id: `global.alcoholScopeValues.${AlcoholScope.plusMinus1}`,
          }),
          value: AlcoholScope.plusMinus1,
        },
      ]}
    />
  );
};

export default AlcoholScopeSelect;
