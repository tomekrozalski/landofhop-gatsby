import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { FormName } from 'utils/enums';
import { AlcoholRelate } from 'components/BeverageDetails/utils/enums';
import { Select } from '../elements';

type Props = {
  disabled?: boolean;
  form?: FormName;
  name: string;
  placeholder?: string;
};

const AlcoholRelateSelect: React.FC<Props> = props => {
  const { formatMessage } = useIntl();
  const relates = Object.keys(AlcoholRelate);

  return (
    <Select
      {...props}
      options={relates.map(value => ({
        label: formatMessage({ id: `global.alcoholRelate.${value}` }),
        value,
      }))}
      placeholder="short"
    />
  );
};

export default AlcoholRelateSelect;
