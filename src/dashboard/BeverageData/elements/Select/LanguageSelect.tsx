import React, { useContext, useEffect } from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { FormName } from 'utils/enums';
import { getValueByLanguage } from 'dashboard/utils/helpers';
import { FieldName, Status as StatusEnum } from 'dashboard/utils/enums';
import { LanguageContext } from 'dashboard/utils/contexts';
import { Error, Loading, Select } from './elements';

type Props = {
  form?: FormName;
  name: FieldName | string;
};

const LanguageSelect: React.FC<Props> = props => {
  const { formatMessage, locale } = useIntl();
  const { getLanguages, status, values } = useContext(LanguageContext);

  useEffect(() => {
    if (status === StatusEnum.idle) {
      getLanguages();
    }
  }, []);

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
          options: values
            .filter(({ code }) => code !== 'en' && code !== 'pl')
            .map(({ id, name }) => ({
              label: getValueByLanguage(name, locale).value,
              value: id,
            })),
        },
      ]}
      placeholder="selectCountry"
    />
  );
};

export default LanguageSelect;
