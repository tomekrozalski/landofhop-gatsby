import React, { useContext, useEffect } from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { FormName, Status as StatusEnum } from 'utils/enums';
import { IngredientType } from 'components/BeverageDetails/utils/enums';
import { getValueByLanguage } from 'dashboard/utils/helpers';
import { FieldName } from 'dashboard/utils/enums';
import { IngredientContext } from 'dashboard/utils/contexts';
import { Error, Loading, Select } from './elements';

type Props = {
  area?: string;
  disabled?: boolean;
  filterByType?: IngredientType;
  form?: FormName;
  isMulti?: boolean;
  name: FieldName;
  placeholder?: string;
};

const IngredientSelect: React.FC<Props> = ({ filterByType, ...rest }) => {
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
      {...rest}
      options={values
        .filter(({ type }) => (filterByType ? type === filterByType : true))
        .map(({ id, name, type }) => ({
          label: getValueByLanguage(name, locale).value,
          value: id,
          type,
        }))}
    />
  );
};

export default IngredientSelect;
