import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { FormName } from 'utils/enums';
import { AgedPreviousContent } from 'components/BeverageDetails/utils/enums';
import { Select } from './elements';

type Props = {
  disabled?: boolean;
  form?: FormName;
  name: string;
  placeholder?: string;
};

const AgedPreviousContentSelect: React.FC<Props> = props => {
  const { formatMessage } = useIntl();
  const contents = Object.keys(AgedPreviousContent);

  return (
    <Select
      {...props}
      isMulti
      options={contents.map(value => ({
        label: formatMessage({
          id: `beverage.details.aged.previousContent.${value}`,
        }),
        value,
      }))}
    />
  );
};

export default AgedPreviousContentSelect;
