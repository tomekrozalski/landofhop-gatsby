import React, { useContext, useEffect } from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { FormName, Status as StatusEnum } from 'utils/enums';
import { getValueByLanguage } from 'dashboard/utils/helpers';
import { FieldName } from 'dashboard/utils/enums';
import { CountryContext } from 'dashboard/utils/contexts';
import { Error, Loading, Select } from './elements';

type Props = {
  form?: FormName;
  name: FieldName;
};

const CountrySelect: React.FC<Props> = props => {
  const { locale } = useIntl();
  const { getCountries, status, values } = useContext(CountryContext);

  useEffect(() => {
    if (status === StatusEnum.idle) {
      getCountries();
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
