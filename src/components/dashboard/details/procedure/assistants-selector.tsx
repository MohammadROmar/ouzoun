import { memo } from 'react';
import Select from 'react-select';

import { User } from '@/models/user';
import { selectorStyles } from '@/data/selector-styles';
import { useTranslations } from 'next-intl';

type AssistantsSelectorProps = {
  assistants: User[];
  locale: string;
  theme: string | undefined;
  defaultValue?: string;
  hasError?: boolean;
};

function AssistantsSelector({
  assistants,
  locale,
  theme,
  defaultValue,
  hasError,
}: AssistantsSelectorProps) {
  const t = useTranslations('assistants-page.assign.procedure-details');

  const options = assistants.map((assistant) => ({
    label: assistant.userName,
    value: assistant.id,
  }));

  return (
    <div className="mt-4">
      <label htmlFor="assistants">{t('assistants.title')}</label>
      <Select
        required
        isMulti
        isClearable={false}
        inputId="assistants"
        name="assistants"
        options={options}
        defaultValue={options.find((option) => option.value === defaultValue)}
        isRtl={locale === 'ar'}
        aria-live="polite"
        aria-errormessage={t('assistants.invalid')}
        styles={selectorStyles(theme)}
        noOptionsMessage={() => t('no-option')}
      />

      {hasError && (
        <p className="mt-1 text-sm text-red-400">{t('assistants.invalid')}</p>
      )}
    </div>
  );
}

export default memo(AssistantsSelector);
