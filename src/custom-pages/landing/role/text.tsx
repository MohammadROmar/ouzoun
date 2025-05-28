import { getLocale, getTranslations } from 'next-intl/server';
import clsx from 'clsx';

import SectionTitle from '@/components/shared/section-title';
import type { Locale } from '@/i18n/routing';

export default async function AboutText() {
  const t = await getTranslations('landing-page.role');
  const locale = (await getLocale()) as Locale;

  return (
    <div className="flex-1">
      <SectionTitle
        title={t('title')}
        subtitle={t('subtitle')}
        locale={locale}
        align="text-start"
      />

      <p className="text-gray mt-4 text-sm">{t('body')}</p>

      <h4
        className={clsx(
          'mt-6 text-2xl font-medium md:text-4xl',
          locale === 'en' && 'font-ubuntu',
        )}
      >
        {t('subtitle2')}
      </h4>

      <p className="text-gray mt-4 text-sm">{t('body2')}</p>
    </div>
  );
}
