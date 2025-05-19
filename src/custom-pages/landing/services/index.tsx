import { getLocale, getTranslations } from 'next-intl/server';

import SectionTitle from '@/components/shared/section-title';
import ServiceCard from './card';
import { services as s } from '@/data/services';
import type { Locale } from '@/i18n/routing';

export default async function Services() {
  const t = await getTranslations('landing-page.services');
  const locale = (await getLocale()) as Locale;

  const services = await s();

  return (
    <section id="services" className="spacing max-container relative">
      <SectionTitle
        title={t('title')}
        subtitle={t('subtitle')}
        locale={locale}
        align="text-center"
      />

      <ul className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} locale={locale} />
        ))}
      </ul>
    </section>
  );
}
