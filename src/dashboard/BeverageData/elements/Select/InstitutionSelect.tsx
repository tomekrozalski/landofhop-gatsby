import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useIntl } from 'gatsby-plugin-intl';

import { FormName } from 'utils/enums';
import { selectInstitutions } from 'dashboard/utils/store/selectors';
import { getAllInstitutions } from 'dashboard/utils/store/actions';
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

const InstitutionSelect: React.FC<Props> = props => {
  const { locale } = useIntl();
  const { status, values } = useSelector(selectInstitutions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status !== StatusEnum.fulfilled) {
      dispatch(getAllInstitutions());
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
    />
  );
};

export default InstitutionSelect;
