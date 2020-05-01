import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useIntl } from 'gatsby-plugin-intl';

import { FormName } from 'utils/enums';
import { selectPlaces } from 'dashboard/utils/store/selectors';
import { getAllPlaces } from 'dashboard/utils/store/actions';
import { getValueByLanguage } from 'dashboard/utils/helpers';
import { Status as StatusEnum } from 'dashboard/utils/enums';
import { Error, Loading, Select } from './elements';

type Props = {
  area?: string;
  form?: FormName;
  isMulti?: boolean;
  name: string;
  placeholder?: string;
};

const PlaceSelect: React.FC<Props> = props => {
  const { locale } = useIntl();
  const { status, values } = useSelector(selectPlaces);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status !== StatusEnum.fulfilled) {
      dispatch(getAllPlaces());
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
