import { getLocale, getTranslations } from 'next-intl/server';
import clsx from 'clsx';

import ContactButton from './contact-btn';
import HeroImage from './image';
import type { Locale } from '@/i18n/routing';

export default async function Hero() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations('landing-page.hero');

  return (
    <section className="spacing flex min-h-screen items-center gap-4 pt-24 max-md:flex-col">
      <div className="flex flex-1 flex-col gap-4">
        <h1
          className={clsx(
            'max-w-xl text-3xl leading-14 font-medium lg:text-5xl',
            locale === 'en' && 'font-ubuntu',
          )}
        >
          <span className="text-green block">{t('main-title1')}</span>
          <span className="block">{t('main-title2')}</span>
        </h1>

        <p className="text-gray text-xl md:text-2xl">{t('main-body')}</p>

        <ContactButton />
      </div>

      <HeroImage />
    </section>
  );
}
