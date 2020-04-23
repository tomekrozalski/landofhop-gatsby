import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { DataLanguage as DataLanguageEnum, FormName } from 'utils/enums';
import { Select } from '.';

type Props = {
  area?: string;
  form?: FormName;
  isMulti?: boolean;
  name: string;
  placeholder?: string;
};

const LanguageSelect: React.FC<Props> = props => {
  const { formatMessage } = useIntl();

  return (
    <Select
      {...props}
      options={[
        {
          label: formatMessage({ id: 'language.group.defaults' }),
          options: [
            {
              label: formatMessage({ id: 'language.pl' }),
              value: DataLanguageEnum.pl,
            },
            {
              label: formatMessage({ id: 'language.en' }),
              value: DataLanguageEnum.en,
            },
          ],
        },
        {
          label: formatMessage({ id: 'language.group.others' }),
          options: Object.keys(DataLanguageEnum)
            .filter(
              value =>
                value !== DataLanguageEnum.pl && value !== DataLanguageEnum.en,
            )
            .map(value => ({
              label: formatMessage({ id: `language.${value}` }),
              value,
            })),
        },
      ]}
    />
  );
};

export default LanguageSelect;
