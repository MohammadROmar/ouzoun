import { memo } from 'react';
import { useLocale } from 'next-intl';
import { useTheme } from 'next-themes';

import Select from 'react-select';
import { getHolidayStatus } from '@/features/assistants/utils/get-holiday-status';
import { selectorStyles } from '@/core/config/selector-styles';
import type { ChangeHolidayStatusActionState as ActionState } from '@/features/assistants/api/change-holiday-status';

type StatusOptionsProps = { state: ActionState; t: (key: string) => string };

const StatusOptions = memo(function StatusOptions({
  state,
  t,
}: StatusOptionsProps) {
  const locale = useLocale();
  const { theme } = useTheme();

  const options = [
    { label: t(getHolidayStatus(1)), value: '1' },
    { label: t(getHolidayStatus(2)), value: '2' },
    { label: t(getHolidayStatus(3)), value: '3' },
  ];

  const status = state.defaultValues.status;

  return (
    <>
      <Select
        isClearable={false}
        required
        inputId="status"
        name="status"
        options={options}
        isRtl={locale === 'ar'}
        defaultValue={{ label: t(getHolidayStatus(+status)), value: status }}
        aria-live="polite"
        aria-invalid={!!state.errors?.status}
        aria-errormessage={t('holiday.invalid-status')}
        styles={selectorStyles(theme)}
        noOptionsMessage={() => t('holiday.no-option')}
      />

      {state.errors?.status && (
        <p className="mt-1 text-sm text-red-400">
          {t('holiday.invalid-status')}
        </p>
      )}
    </>
  );
});

export default StatusOptions;
