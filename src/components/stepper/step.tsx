import { useLocale } from 'next-intl';
import clsx from 'clsx';

import CheckMarkIcon from '@/assets/icons/check-mark';

type StepProps = {
  label: string;
  index: number;
  isVertical: boolean;
  isActive: boolean;
  isCompleted: boolean;
};

function Step({ label, index, isVertical, isActive, isCompleted }: StepProps) {
  const locale = useLocale();
  const isEn = locale === 'en';

  const getStepBgColor = () => {
    if (isActive) return 'bg-blue-400';
    else if (isCompleted) return 'bg-green-400';
    else return 'bg-slate-700';
  };

  return (
    <li className={clsx('flex items-center gap-2', !isVertical && 'flex-col')}>
      <div
        className={clsx(
          'relative box-content flex size-7 items-center justify-center rounded-full p-1.5 transition-colors duration-1000',
          getStepBgColor(),
          index !== 0 &&
            'before:absolute before:-z-10 before:h-1 before:bg-[inherit] before:transition-colors before:duration-100',
          index !== 0 &&
            (isVertical
              ? 'mt-6 before:bottom-full before:w-[200%] before:rotate-90'
              : `before:top-1/2 ${isEn ? 'before:right-full' : 'before:left-full'} before:w-[200%] before:-translate-y-1/2`),
        )}
        aria-current={isActive ? 'step' : undefined}
      >
        {isCompleted ? (
          <CheckMarkIcon className="size-5 text-white" aria-hidden="true" />
        ) : (
          <p className="text-white">{index + 1}</p>
        )}
      </div>

      <p
        className={clsx(
          !isVertical && 'max-w-[10ch]',
          index !== 0 && isVertical && 'mt-6',
        )}
      >
        {label}
      </p>
    </li>
  );
}

export default Step;
