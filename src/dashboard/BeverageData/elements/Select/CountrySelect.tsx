import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useIntl } from 'gatsby-plugin-intl';

import { FormName } from 'utils/enums';
import { selectCountries } from 'dashboard/utils/store/selectors';
import { getAllCountries } from 'dashboard/utils/store/actions';
import { getValueByLanguage } from 'dashboard/utils/helpers';
import { Status as StatusEnum } from 'dashboard/utils/enums';
import { Error, Loading, Select } from './elements';

type Props = {
  form?: FormName;
  name: string;
};

const CountrySelect: React.FC<Props> = props => {
  const { locale } = useIntl();
  const { status, values } = useSelector(selectCountries);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status !== StatusEnum.fulfilled) {
      dispatch(getAllCountries());
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
      options={values.map(({ id, name }) => ({
        label: getValueByLanguage(name, locale).value,
        value: id,
      }))}
      placeholder="selectCountry"
    />
  );
};

export default CountrySelect;
