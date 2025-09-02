import { memo, useState } from 'react';
import { useLocale } from 'next-intl';
import { useTheme } from 'next-themes';
import Select from 'react-select';

import AssistantsSelector from './assistants-selector';
import { selectorStyles } from '@/data/selector-styles';
import { User } from '@/models/user';

type StatusOptionsProps = {
  t: (key: string) => string;
  defaultValue?: string;
  assistants: User[];
  errors?: { status: boolean; assistants: boolean };
};

const StatusOptions = memo(function StatusOptions({
  t,
  errors,
  defaultValue,
  assistants,
}: StatusOptionsProps) {
  const [selectedStatus, setSelectedStatus] = useState('');

  const locale = useLocale();
  const { theme } = useTheme();

  const options = [
    { label: t('info.status.accept'), value: '2' },
    { label: t('info.status.decline'), value: '4' },
  ];

  return (
    <>
      <div>
        <label htmlFor="status">{t('info.status.title')}</label>
        <Select
          required
          isClearable={false}
          inputId="status"
          name="status"
          options={options}
          defaultValue={options.find((option) => option.value === defaultValue)}
          isRtl={locale === 'ar'}
          aria-live="polite"
          aria-errormessage={t('info.status.invalid')}
          styles={selectorStyles(theme)}
          noOptionsMessage={() => t('no-option')}
          onChange={(newSelectedValue) => {
            const newValue = newSelectedValue as (typeof options)[0];
            setSelectedStatus(newValue.value);
          }}
        />

        {errors?.status && (
          <p className="mt-1 text-sm text-red-400">
            {t('info.status.invalid')}
          </p>
        )}
      </div>

      {selectedStatus === '2' && (
        <AssistantsSelector
          assistants={assistants}
          locale={locale}
          theme={theme}
          hasError={errors?.assistants}
        />
      )}
    </>
  );
});

export default StatusOptions;
