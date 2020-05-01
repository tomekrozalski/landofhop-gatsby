import { OptionProps } from 'react-select/src/types';

export type EnhancedOptions = OptionProps & { isMulti: boolean };

export default {
  container: (_: any, { isDisabled }: EnhancedOptions) => ({
    label: 'container',
    cursor: isDisabled ? 'not-allowed' : 'pointer',
  }),
  control: (_: any, { isDisabled, isFocused, isMulti }: EnhancedOptions) => {
    const getBorderColor = () => {
      if (isDisabled) {
        return 'var(--color-bright)';
      }

      if (isFocused) {
        return 'var(--color-black)';
      }
      return 'var(--color-dark)';
    };

    return {
      label: 'control',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'stretch',
      height: isMulti ? 'auto' : 'var(--size-input-height)',
      minHeight: 'var(--size-input-height)',
      borderWidth: 0,
      borderBottom: `1px solid ${getBorderColor()}`,
      borderRadius: 0,
      backgroundColor: isDisabled
        ? 'var(--color-brightest)'
        : 'var(--color-brighter)',
      transition: 'border-color .1s',
      font: 'var(--font-weight-light) 1.6rem / 1 var(--font-primary)',
    };
  },
  dropdownIndicator: (base: any, { isFocused }: EnhancedOptions) => ({
    ...base,
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: '0 8px',
    color: isFocused ? 'var(--color-darker)' : 'var(--color-dark)',
  }),
  indicatorsContainer: (base: any, { isDisabled }: EnhancedOptions) => ({
    ...base,
    pointerEvents: isDisabled ? 'none' : 'auto',
  }),
  indicatorSeparator: (base: any) => ({
    ...base,
    background: 'var(--color-bright)',
  }),
  input: () => ({
    label: 'input',
    margin: '0 2px',
    paddingTop: '1px',
    paddingBottom: '1px',
    font: 'var(--font-weight-light) 1.6rem / 1 var(--font-primary)',
  }),
  menu: (base: any) => ({
    ...base,
    borderRadius: 0,
    backgroundColor: 'var(--color-white)',
    zIndex: 'var(--index-dropdown)',
  }),
  menuList: (base: any) => ({
    ...base,
    paddingTop: 0,
    paddingBottom: 0,
  }),
  multiValue: (base: any, { data }: EnhancedOptions) => {
    const getBgColor = () => {
      switch (data.type) {
        case 'hop':
          return 'var(--color-ingredients-hop)';
        case 'malt':
          return 'var(--color-ingredients-malt)';
        case 'appendix':
          return 'var(--color-ingredients-appendix)';
        default:
          return 'var(--color-bright)';
      }
    };

    return {
      ...base,
      label: 'multi-value',
      display: 'flex',
      alignItems: 'center',
      height: 'calc(var(--size-input-height) - 8px)',
      margin: '3px',
      padding: '0.2rem 2.0rem 0.2rem 0.2rem',
      backgroundColor: getBgColor(),
      position: 'relative',
    };
  },
  multiValueLabel: (base: any, { data }: EnhancedOptions) => {
    const getColor = () => {
      switch (data.type) {
        case 'hop':
        case 'malt':
        case 'appendix':
          return 'var(--color-white)';
        default:
          return 'var(--color-black)';
      }
    };

    return {
      ...base,
      label: 'multi-value-label',
      padding: '0 3px',
      font:
        'var(--font-weight-light) 1.4rem / calc(var(--size-input-height) - 8px) var(--font-primary)',
      color: getColor(),
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    };
  },
  multiValueRemove: () => ({}),
  option: (base: any, { isFocused, isSelected }: EnhancedOptions) => ({
    ...base,
    backgroundColor: `${isFocused ? 'var(--color-brightest)' : 'transparent'}`,
    color: `${isSelected ? 'var(--color-black)' : 'var(--color-darker)'}`,
    cursor: 'pointer',
  }),
  placeholder: (base: any, { isDisabled }: EnhancedOptions) => ({
    ...base,
    color: isDisabled ? 'var(--color-dark)' : 'var(--color-darker)',
    font: 'var(--font-weight-light) 1.6rem / 1 var(--font-primary)',
  }),
  singleValue: (base: any) => ({
    ...base,
    lineHeight: 'var(--size-input-height)',
  }),
  valueContainer: (base: any, { isMulti }: EnhancedOptions) => ({
    ...base,
    height: isMulti ? 'auto' : 'var(--size-input-height)',
    padding: '0 8px',
  }),
};
