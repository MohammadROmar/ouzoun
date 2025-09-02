'use client';

import { useTheme } from 'next-themes';
import { useLocale } from 'next-intl';
import Select from 'react-select';

import { selectorStyles } from '@/core/config/selector-styles';
import { Kit } from '@/features/kits/models/kit';

type KitSelectorProps = {
  label: string;
  kits: Kit[];
  kitId?: string;
  error?: string;
  required?: boolean;
  noOption: string;
};

function KitSelector({
  label,
  kits,
  kitId,
  error,
  required,
  noOption,
}: KitSelectorProps) {
  const { theme } = useTheme();
  const locale = useLocale();

  const kit =
    kitId === undefined ? undefined : kits.find((kit) => kit.id === +kitId);
  const options = kits.map((kit) => ({ label: kit.name, value: kit.id }));

  return (
    <div>
      <label htmlFor="kitId">{label}</label>
      <Select
        isClearable={!required}
        required={required}
        inputId="kitId"
        name="kitId"
        options={options}
        placeholder={false}
        isRtl={locale === 'ar'}
        defaultValue={kit ? { label: kit.name, value: kit.id } : undefined}
        aria-live="polite"
        aria-invalid={!!error}
        aria-errormessage={error}
        styles={selectorStyles(theme)}
        noOptionsMessage={() => noOption}
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
