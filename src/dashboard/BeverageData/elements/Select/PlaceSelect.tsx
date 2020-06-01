import React, { useContext, useEffect } from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { FormName } from 'utils/enums';
import { PlaceContext } from 'dashboard/utils/contexts';
import { getValueByLanguage } from 'dashboard/utils/helpers';
import { FieldName, Status as StatusEnum } from 'dashboard/utils/enums';
import { Error, Loading, Select } from './elements';

type Props = {
  area?: string;
  form?: FormName;
  isMulti?: boolean;
  name: FieldName;
  placeholder?: string;
};

const PlaceSelect: React.FC<Props> = props => {
  const { locale } = useIntl();
  const { status, values, getPlaces } = useContext(PlaceContext);

  useEffect(() => {
    if (status !== StatusEnum.fulfilled) {
      getPlaces();
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
      options={values.map(({ city, id, institution }) => ({
        label: `${getValueByLanguage(city, locale).value} (${
          getValueByLanguage(institution, locale).value
        })`,
        value: id,
      }))}
    />
  );
};

export default PlaceSelect;
