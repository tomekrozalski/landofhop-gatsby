import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useIntl } from 'gatsby-plugin-intl';

import { FormName } from 'utils/enums';
import { selectInstitutions } from 'dashboard/utils/store/selectors';
import { getAllInstitutions } from 'dashboard/utils/store/actions';
import { getValueByLanguage } from 'dashboard/utils/helpers';
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
  const { locale } = useIntl();
  const { isLoaded, values } = useSelector(selectInstitutions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoaded) {
      dispatch(getAllInstitutions());
    }
  }, []);

  return isLoaded ? (
    <Select
      {...props}
      options={values.map(({ id, name }) => ({
        label: getValueByLanguage(name, locale).value,
        value: id,
      }))}
    />
  ) : (
    <Loading />
  );
};

export default InstitutionSelect;
