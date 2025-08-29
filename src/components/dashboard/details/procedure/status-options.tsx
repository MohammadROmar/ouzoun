import { memo } from 'react';
import { useLocale } from 'next-intl';
import { useTheme } from 'next-themes';

import Select from 'react-select';
import { selectorStyles } from '@/data/selector-styles';

type StatusOptionsProps = {
  hasError?: boolean;
  defaultValue?: string;
  t: (key: string) => string;
};

const StatusOptions = memo(function StatusOptions({
  hasError,
  t,
  defaultValue,
}: StatusOptionsProps) {
  const locale = useLocale();
  const { theme } = useTheme();

  const options = [
    { label: t('procedure-details.accept'), value: '2' },
    { label: t('procedure-details.decline'), value: '4' },
  ];

  return (
    <>
      <Select
        required
        isClearable={false}
        inputId="status"
        name="status"
        options={options}
        defaultValue={options.find((option) => option.value === defaultValue)}
        isRtl={locale === 'ar'}
        aria-live="polite"
        aria-invalid={hasError}
        aria-errormessage={t('procedure-details.invalid-status')}
        styles={selectorStyles(theme)}
        noOptionsMessage={() => t('procedure-details.no-option')}
      />

      {hasError && (
        <p className="mt-1 text-sm text-red-400">
          {t('procedure-details.invalid-status')}
        </p>
      )}
    </>
  );
});

export default StatusOptions;
