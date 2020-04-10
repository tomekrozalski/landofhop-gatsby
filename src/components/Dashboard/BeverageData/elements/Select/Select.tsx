import React from 'react';
import { FieldAttributes, useField } from 'formik';
import ReactSelect, { components } from 'react-select';
import { useIntl } from 'gatsby-plugin-intl';

import { FieldStatusIndicator } from 'elements';

import styles from './styles';

type Props = {
  area?: string;
  isMulti?: boolean;
  name: string;
  options: { label: string; value: string }[];
  placeholder?: string;
};

const Select: React.FC<Props & FieldAttributes<{}>> = ({
  area,
  isMulti = false,
  name,
  options,
  placeholder,
}) => {
  const { formatMessage } = useIntl();
  const [field, { error, touched }, { setValue }] = useField(name);

  // const input = props => <components.Input {...props} id={`${formName}-${fieldName}`} />;

  // const option = props => (
  // 	<MarkType type={get(props, 'data.type')}>
  // 		<components.Option {...props} />
  // 	</MarkType>
  // );

  return (
    <FieldStatusIndicator area={area} error={error} touched={touched}>
      <ReactSelect
        // components={{
        // 	Input: input,
        // 	Option: option,
        // }}
        // isDisabled={value === null || disabled}
        isMulti={isMulti}
        // isClearable={false}
        onChange={setValue}
        options={options}
        placeholder={
          placeholder
            ? formatMessage({
                id: `dashboard.selectPlaceholder.${placeholder}`,
              })
            : formatMessage({ id: 'dashboard.selectPlaceholder.default' })
        }
        styles={styles}
        value={field.value}
      />
    </FieldStatusIndicator>
  );
};

export default Select;
