import { memo, useState } from 'react';
import { useTranslations } from 'next-intl';
import Select from 'react-select';

import { selectorStyles } from '@/core/config/selector-styles';
import { User } from '@/core/models/user';

type AssistantsSelectorProps = {
  assistants: User[];
  locale: string;
  theme: string | undefined;
  defaultValue?: string;
  hasError?: boolean;
  maxAssistants: number;
};

function AssistantsSelector({
  assistants,
  locale,
  theme,
  defaultValue,
  maxAssistants,
  hasError,
}: AssistantsSelectorProps) {
  const [selectedAssistants, setSelectedAssistants] = useState<User[]>([]);

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
        maxMenuHeight={150}
        defaultValue={options.find((option) => option.value === defaultValue)}
        isRtl={locale === 'ar'}
        aria-live="polite"
        aria-errormessage={t('assistants.invalid')}
        styles={selectorStyles(theme)}
        noOptionsMessage={() => t('no-option')}
        value={selectedAssistants}
        onChange={(newValue) => {
          if (newValue.length <= maxAssistants) {
            setSelectedAssistants(newValue as User[]);
          }
        }}
      />
      <p className="text-gray mt-1 text-sm">
        {t('assistants.max', { value: maxAssistants })}
      </p>

      {hasError && (
        <p className="mt-1 text-sm text-red-400">{t('assistants.invalid')}</p>
      )}
    </div>
  );
}

export default memo(AssistantsSelector);
