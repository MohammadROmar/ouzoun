import { useLocale, useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import Select from 'react-select';

import { selectorStyles } from '@/data/selector-styles';

type CategorySelectorProps = { defaultValue?: number; error?: string };

function CategorySelector({ defaultValue, error }: CategorySelectorProps) {
  const locale = useLocale();
  const t = useTranslations('tools-page');

  const { theme } = useTheme();

  const options = [
    { label: t('item.surgery'), value: 1 },
    { label: t('item.recovery'), value: 2 },
  ];

  const defaultCategory = options.find(({ value }) => value === defaultValue);

  return (
    <div>
      <label htmlFor="kit-id">{t('item.category')}</label>
      <Select
        required
        inputId="category-id"
        name="category-id"
        options={options}
        placeholder={false}
        defaultValue={defaultCategory}
        isRtl={locale === 'ar'}
        aria-live="polite"
        styles={selectorStyles(theme)}
        aria-invalid={!!error}
        aria-errormessage={error}
        noOptionsMessage={() => t('no-option')}
      />

      {error && (
        <p className="mt-1 text-sm text-red-400" aria-live="polite">
          {error}
        </p>
      )}
    </div>
  );
}

export default CategorySelector;
