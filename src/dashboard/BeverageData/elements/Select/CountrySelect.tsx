import React, { useContext, useEffect } from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { FormName } from 'utils/enums';
import { getValueByLanguage } from 'dashboard/utils/helpers';
import { FieldName, Status as StatusEnum } from 'dashboard/utils/enums';
import { CountryContext } from 'dashboard/utils/contexts';
import { Error, Loading, Select } from './elements';

type Props = {
  form?: FormName;
  name: FieldName;
};

const CountrySelect: React.FC<Props> = props => {
  const { locale } = useIntl();
  const { status, values } = useContext(CountryContext);

  useEffect(() => {
    if (status !== StatusEnum.fulfilled) {
      console.log('getAllCountries');
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
