import React, { useContext, useEffect } from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { FormName, Status as StatusEnum } from 'utils/enums';
import { getValueByLanguage } from 'dashboard/utils/helpers';
import { FieldName } from 'dashboard/utils/enums';
import { IngredientContext } from 'dashboard/utils/contexts';
import { Error, Loading, Select } from './elements';

type Props = {
  area?: string;
  disabled?: boolean;
  form?: FormName;
  isMulti?: boolean;
  name: FieldName;
  placeholder?: string;
};

const IngredientSelect: React.FC<Props> = props => {
  const { locale } = useIntl();
  const { getIngredients, status, values } = useContext(IngredientContext);

  useEffect(() => {
    if (status === StatusEnum.idle) {
      getIngredients();
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

export default IngredientSelect;
