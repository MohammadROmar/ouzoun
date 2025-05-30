import Link from 'next/link';
import clsx from 'clsx';

import CurvedArrrowIcon from '@/assets/icons/curved-arrow';
import PatternIcon from '@/assets/icons/patterns/pattern1';
import type { Locale } from '@/i18n/routing';

type StartButtonProps = {
  locale: Locale;
  t(key: string): string;
};

function StartButton({ locale, t }: StartButtonProps) {
  return (
    <div className="relative w-fit">
      <Link
        href={`/${locale}/sign-in`}
        className="button flex items-center gap-3 text-xl font-medium md:text-2xl"
      >
        <p>{t('start')}</p>
        <CurvedArrrowIcon className="size-3" />
      </Link>

      <PatternIcon
        className={clsx(
          'absolute top-1/2 -z-10 size-14 -translate-y-1/2',
          locale === 'ar'
            ? 'left-0 -translate-x-1/5'
            : 'right-0 translate-x-1/5',
        )}
      />
    </div>
  );
}

export default StartButton;
