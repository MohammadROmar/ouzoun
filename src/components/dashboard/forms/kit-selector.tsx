'use client';

import { useTheme } from 'next-themes';
import { useLocale } from 'next-intl';
import Select from 'react-select';

import { kits } from '@/data/dummy/kits';
import { kitSelectorStyles } from '@/data/kit-selector-styles';

type KitSelectorProps = {
  label: string;
  kitId?: string;
  error?: string;
  required?: boolean;
};

function KitSelector({ label, kitId, error, required }: KitSelectorProps) {
  const { theme } = useTheme();
  const locale = useLocale();

  const kit = kits.find((kit) => kit.id === kitId);
  const options = kits.map((kit) => ({ label: kit.name, value: kit.id }));

  return (
    <div>
      <label htmlFor="kit-id">{label}</label>
      <Select
        required={required}
        inputId="kit-id"
        name="kit-id"
        options={options}
        placeholder={false}
        isRtl={locale === 'ar'}
        defaultValue={kit ? { label: kit.name, value: kit.id } : undefined}
        aria-live="polite"
        aria-invalid={!!error}
        aria-errormessage={error}
        styles={kitSelectorStyles(theme)}
      />

      {error && (
        <p className="mt-1 text-sm text-red-400" aria-live="polite">
          {error}
        </p>
      )}
    </div>
  );
}

export default KitSelector;
