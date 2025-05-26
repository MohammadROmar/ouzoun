import clsx from 'clsx';

import type { Locale } from '@/i18n/routing';

type SectionTitleProps = {
  title: string;
  subtitle: string;
  locale: Locale;
  align: 'text-start' | 'text-center';
};

function SectionTitle({ title, subtitle, locale, align }: SectionTitleProps) {
  return (
    <>
      <h2 className={clsx('text-green dark:text-green-light text-lg', align)}>
        {title}
      </h2>
      <h3
        className={clsx(
          'text-2xl font-medium md:text-4xl',
          locale === 'en' && 'font-ubuntu',
          align,
        )}
      >
        {subtitle}
      </h3>
    </>
  );
}

export default SectionTitle;
