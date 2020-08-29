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
            id: `global.alcoholScopeValues.${AlcoholScope.m500}`,
          }),
          value: AlcoholScope.m500,
        },
        {
          label: formatMessage({
            id: `global.alcoholScopeValues.${AlcoholScope.pm500}`,
          }),
          value: AlcoholScope.pm500,
        },
        {
          label: formatMessage({
            id: `global.alcoholScopeValues.${AlcoholScope.pm1000}`,
          }),
          value: AlcoholScope.pm1000,
        },
      ]}
      placeholder="short"
    />
  );
};

export default AlcoholScopeSelect;
