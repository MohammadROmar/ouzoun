'use client';

import { useTheme } from 'next-themes';
import { useTranslations } from 'next-intl';
import Select, { StylesConfig } from 'react-select';

import { kits } from '@/data/dummy/kits';

type KitSelectorProps = { error?: string };

export default function KitSelector({ error }: KitSelectorProps) {
  const { theme } = useTheme();

  const t = useTranslations('implants-page.item');

  const styles: StylesConfig = {
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

  const options = kits.map((kit) => ({ label: kit.name, value: kit.id }));

  return (
    <div>
      <label htmlFor="kit-id">{t('kit-id')}</label>
      <Select
        styles={styles}
        inputId="kit-id"
        name="kit-id"
        placeholder={false}
        options={options}
        aria-errormessage={error}
      />

      {error && (
        <p className="mt-1 text-sm text-red-400" aria-live="polite">
          {error}
        </p>
      )}
    </div>
  );
}
