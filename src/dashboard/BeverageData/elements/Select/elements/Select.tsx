import React from 'react';
import { useField } from 'formik';
import ReactSelect from 'react-select';
import { useIntl } from 'gatsby-plugin-intl';
import styled from 'styled-components';
import isEqual from 'lodash/isEqual';

import { getAnchor } from 'utils/helpers';
import { FormName } from 'utils/enums';
import { FieldName } from 'dashboard/utils/enums';
import { MultiValueRemove, Option, styles } from '.';

const Wrapper = styled.span<{ area?: string }>`
  ${({ area }) => area && `grid-column: ${area};`}
  display: block;
  width: 100%;
  position: relative;
`;

type Props = {
  area?: string;
  disabled?: boolean;
  form?: FormName;
  isMulti?: boolean;
  name: FieldName | string;
  options: {
    label: string;
    value?: string;
    options?: { label: string; value: string }[];
  }[];
  placeholder?: string;
};

const Select: React.FC<Props> = ({
  area,
  disabled,
  form,
  isMulti = false,
  name,
  options,
  placeholder,
}) => {
  const { formatMessage } = useIntl();
  const [field, , { setValue }] = useField(name);

  const value = isEqual(field.value, { value: '' }) ? null : field.value;

  return (
    <Wrapper area={area}>
      <ReactSelect
        components={{ MultiValueRemove, Option }}
        inputId={form ? getAnchor({ form, name }) : ''}
        isDisabled={disabled || field.value === null}
        isMulti={isMulti}
        isClearable={false}
        noOptionsMessage={() =>
          formatMessage({ id: 'dashboard.select.noOptions' })
        }
        onChange={setValue}
        options={options}
        placeholder={
          placeholder
            ? formatMessage({
                id: `dashboard.select.placeholder.${placeholder}`,
              })
            : formatMessage({ id: 'dashboard.select.placeholder.default' })
        }
        styles={styles}
        value={value}
      />
    </Wrapper>
  );
};

export default Select;
