import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { FormName } from 'utils/enums';
import { ExtractRelate } from 'components/BeverageDetails/utils/enums';
import { Select } from '../elements';

type Props = {
  disabled?: boolean;
  form?: FormName;
  name: string;
  placeholder?: string;
};

const ExtractRelateSelect: React.FC<Props> = props => {
  const { formatMessage } = useIntl();
  const relates = Object.keys(ExtractRelate);

  return (
    <Select
      {...props}
      options={relates.map(value => ({
        label: formatMessage({ id: `global.extractRelate.${value}` }),
        value,
      }))}
      placeholder="short"
    />
  );
};

export default ExtractRelateSelect;
