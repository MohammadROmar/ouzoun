import type { StylesConfig } from 'react-select';

export function kitSelectorStyles(theme?: string): StylesConfig {
  return {
    container: (base) => ({ ...base, marginTop: '0.5rem' }),
    control: (base, state) => ({
      ...base,
      padding: '0.25rem 0.5rem',
      backgroundColor: 'none',
      borderColor: 'var(--color-gray)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: state.isFocused
        ? `0 0 0 1px ${theme === 'dark' ? 'white' : 'black'}`
        : '',
      ':hover': {
        borderColor: 'var(--color-gray)',
      },
    }),
    indicatorSeparator: (base) => ({
      ...base,
      backgroundColor: 'var(--color-gray)',
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: 'var(--color-gray)',
      ':hover': {},
    }),
    input: (base) => ({ ...base, color: 'currentColor' }),
    singleValue: (base) => ({ ...base, color: 'currentColor' }),
    menu: (base) => ({
      ...base,
      border: '1px solid var(--color-gray)',
      borderRadius: 'var(--radius-lg)',
      backgroundColor: 'var(--color-bg-primary)',
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? 'var(--color-green)' : 'none',
      color: state.isFocused ? 'white' : 'currentColor',
    }),
  };
}
