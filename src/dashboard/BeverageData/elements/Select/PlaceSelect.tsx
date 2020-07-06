import React, { useContext, useEffect } from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { FormName, Status as StatusEnum } from 'utils/enums';
import { PlaceContext } from 'dashboard/utils/contexts';
import { getValueByLanguage } from 'dashboard/utils/helpers';
import { FieldName } from 'dashboard/utils/enums';
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
    if (status === StatusEnum.idle) {
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
