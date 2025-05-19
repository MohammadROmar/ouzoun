import Link from 'next/link';
import { getLocale, getTranslations } from 'next-intl/server';
import clsx from 'clsx';

import CurvedArrrowIcon from '@/assets/icons/curved-arrow';
import PatternIcon from '@/assets/icons/patterns/pattern1';
import type { Locale } from '@/i18n/routing';

async function ContactButton() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations('LandingPage');

  return (
    <div className="relative w-fit">
      <Link
        href={`/${locale}#contact`}
        className="bg-green flex cursor-pointer items-center gap-3 rounded-full px-4 py-2 text-xl text-white md:text-2xl"
      >
        <p>{t('contact')}</p>
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

export default ContactButton;
