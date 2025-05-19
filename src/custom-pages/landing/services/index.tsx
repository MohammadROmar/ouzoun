import { getLocale, getTranslations } from 'next-intl/server';
import clsx from 'clsx';

import ServiceCard from './card';
import ServicesIcon from '@/assets/icons/services';
import { services as s } from '@/data/services';
import type { Locale } from '@/i18n/routing';

export default async function Services() {
  const t = await getTranslations('landing-page.services');
  const locale = (await getLocale()) as Locale;

  const services = await s();

  return (
    <section id="services" className="spacing max-container">
      <div className="relative m-auto w-fit">
        <h2 className="text-green-light text-center text-lg">{t('title')}</h2>
        <h3
          className={clsx(
            'text-center text-2xl font-medium md:text-4xl',
            locale === 'en' && 'font-ubuntu',
          )}
        >
          {t('subtitle')}
        </h3>

        <ServicesIcon className="text-green-light/50 absolute top-1/2 right-0 -z-10 h-full translate-x-13/12 -translate-y-1/2 scale-110" />
      </div>

      <ul className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} locale={locale} />
        ))}
      </ul>
    </section>
  );
}
