import React from 'react';
import { useField } from 'formik';
import ReactSelect from 'react-select';
import { useIntl } from 'gatsby-plugin-intl';

import { FieldStatusIndicator } from 'elements';
import { SelectType } from 'components/Dashboard/utils/enums';
import { getOptions, Option, styles } from '.';

type Props = {
  area?: string;
  isDisabled?: boolean;
  isMulti?: boolean;
  name: string;
  placeholder?: string;
  type: SelectType;
};

const Select: React.FC<Props> = ({
  area,
  isDisabled = false,
  isMulti = false,
  name,
  placeholder,
  type,
}) => {
  const { formatMessage } = useIntl();
  const [field, { error, touched }, { setValue }] = useField(name);

  return (
    <FieldStatusIndicator area={area} error={error} touched={touched}>
      <ReactSelect
        components={{ Option }}
        isDisabled={isDisabled}
        isMulti={isMulti}
        isClearable={false}
        noOptionsMessage={() =>
          formatMessage({ id: 'dashboard.select.noOptions' })
        }
        onChange={setValue}
        options={getOptions({ formatMessage, type })}
        placeholder={
          placeholder
            ? formatMessage({
                id: `dashboard.select.placeholder.${placeholder}`,
              })
            : formatMessage({ id: 'dashboard.select.placeholder.default' })
        }
        styles={styles}
        value={field.value}
      />
    </FieldStatusIndicator>
  );
};

export default Select;
