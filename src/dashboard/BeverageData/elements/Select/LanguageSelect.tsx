import React, { useContext, useEffect } from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { DataLanguage as DataLanguageEnum, FormName } from 'utils/enums';
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
      options={values.map(({ code, name }) => ({
        label: getValueByLanguage(name, locale).value,
        value: code,
      }))}
      placeholder="selectCountry"
    />
  );

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
