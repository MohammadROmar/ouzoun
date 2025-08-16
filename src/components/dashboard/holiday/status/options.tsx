import { memo } from 'react';
import { useLocale } from 'next-intl';
import { useTheme } from 'next-themes';

import { getHolidayStatus } from '@/utils/details/holiday-status';
import type { ChangeHolidayStatusActionState as ActionState } from '@/actions/change-holiday-status';
import Select from 'react-select';
import { selectorStyles } from '@/data/selector-styles';

type StatusOptionsProps = { state: ActionState; t: (key: string) => string };

const StatusOptions = memo(({ state, t }: StatusOptionsProps) => {
  const locale = useLocale();
  const { theme } = useTheme();

  const options = [
    { label: getHolidayStatus(1, t), value: '1' },
    { label: getHolidayStatus(2, t), value: '2' },
    { label: getHolidayStatus(3, t), value: '3' },
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
        defaultValue={{ label: getHolidayStatus(+status, t), value: status }}
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
