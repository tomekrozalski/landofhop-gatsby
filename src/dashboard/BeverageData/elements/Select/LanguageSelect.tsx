import React, { useContext } from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { FormName, Status as StatusEnum } from 'utils/enums';
import { getValueByLanguage } from 'dashboard/utils/helpers';
import { FieldName } from 'dashboard/utils/enums';
import { LanguageContext } from 'dashboard/utils/contexts';
import { Error, Loading, Select } from './elements';

type Props = {
  area?: string;
  form?: FormName;
  name: FieldName | string;
  placeholder?: string;
};

const LanguageSelect: React.FC<Props> = props => {
  const { formatMessage, locale } = useIntl();
  const { status, values } = useContext(LanguageContext);

  if (status === StatusEnum.rejected) {
    return <Error />;
  }

  if (status === StatusEnum.pending) {
    return <Loading />;
  }

  return (
    <Select
      {...props}
      options={[
        {
          label: formatMessage({ id: 'language.group.defaults' }),
          options: values
            .filter(({ code }) => code === 'en' || code === 'pl')
            .map(({ id, name }) => ({
              label: getValueByLanguage(name, locale).value,
              value: id,
            })),
        },
        {
          label: formatMessage({ id: 'language.group.others' }),
          options: [
            ...values
              .filter(({ code }) => code !== 'en' && code !== 'pl')
              .map(({ id, name }) => ({
                label: getValueByLanguage(name, locale).value,
                value: id,
              })),
            {
              label: formatMessage({ id: 'language.none' }),
              value: 'none',
            },
          ],
        },
      ]}
      placeholder="selectLanguage"
    />
  );
};

export default LanguageSelect;
