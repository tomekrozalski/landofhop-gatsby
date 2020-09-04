import React, { useContext, useEffect } from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { FormName, Status as StatusEnum } from 'utils/enums';
import { getValueByLanguage } from 'dashboard/utils/helpers';
import { FieldName } from 'dashboard/utils/enums';
import { InstitutionContext } from 'dashboard/utils/contexts';
import { Error, Loading, Select } from './elements';

type Props = {
  area?: string;
  disabled?: boolean;
  form?: FormName;
  isMulti?: boolean;
  name: FieldName;
  placeholder?: string;
  withUnknown?: boolean;
};

const InstitutionSelect: React.FC<Props> = ({ withUnknown, ...rest }) => {
  const { formatMessage, locale } = useIntl();
  const { getInstitutions, status, values } = useContext(InstitutionContext);

  useEffect(() => {
    if (status === StatusEnum.idle) {
      getInstitutions();
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
      options={
        withUnknown
          ? [
              {
                label: formatMessage({
                  id: 'beverage.details.contractUnknown',
                }),
                value: '--',
              },
              {
                label: formatMessage({ id: 'global.institutions' }),
                options: values.map(({ id, name }) => ({
                  label: getValueByLanguage(name, locale).value,
                  value: id,
                })),
              },
            ]
          : values.map(({ id, name }) => ({
              label: getValueByLanguage(name, locale).value,
              value: id,
            }))
      }
      placeholder="selectBrand"
    />
  );
};

export default InstitutionSelect;
