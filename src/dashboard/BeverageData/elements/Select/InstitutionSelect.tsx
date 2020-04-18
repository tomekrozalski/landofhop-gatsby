import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useIntl } from 'gatsby-plugin-intl';

import { selectInstitutions } from 'dashboard/utils/store/selectors';
import { getAllInstitutions } from 'dashboard/utils/store/actions';
import { DataLanguage as DataLanguageEnum, FormName } from 'utils/enums';
import { Loading, Select } from '.';

type Props = {
  area?: string;
  form?: FormName;
  isDisabled?: boolean;
  isMulti?: boolean;
  name: string;
  placeholder?: string;
};

const InstitutionSelect: React.FC<Props> = props => {
  const { formatMessage } = useIntl();
  const data = useSelector(selectInstitutions);
  const dispatch = useDispatch();

  console.log('data', data);

  useEffect(() => {
    dispatch(getAllInstitutions());
  }, []);

  if (true) {
    return <Loading />;
  }

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

export default InstitutionSelect;
