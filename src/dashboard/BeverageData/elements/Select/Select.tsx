import React from 'react';
import { useField } from 'formik';
import ReactSelect from 'react-select';
import { useIntl } from 'gatsby-plugin-intl';
import styled from 'styled-components';

import { getAnchor } from 'utils/helpers';
import { FormName } from 'utils/enums';
import { Option, styles } from '.';

const Wrapper = styled.span<{ area?: string }>`
  ${({ area }) => area && `grid-column: ${area};`}
  display: block;
  width: 100%;
  position: relative;
`;

type Props = {
  area?: string;
  form?: FormName;
  isDisabled?: boolean;
  isMulti?: boolean;
  name: string;
  options: {
    label: string;
    value?: string;
    options?: { label: string; value: string }[];
  }[];
  placeholder?: string;
};

const Select: React.FC<Props> = ({
  area,
  form,
  isDisabled = false,
  isMulti = false,
  name,
  options,
  placeholder,
}) => {
  const { formatMessage } = useIntl();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [field, _, { setValue }] = useField(name);

  return (
    <Wrapper area={area}>
      <ReactSelect
        components={{ Option }}
        inputId={form ? getAnchor({ form, name }) : ''}
        isDisabled={isDisabled}
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
        value={field.value}
      />
    </Wrapper>
  );
};

export default Select;
