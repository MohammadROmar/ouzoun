import { getLocale, getTranslations } from 'next-intl/server';

import SectionTitle from '@/components/shared/section-title';
import CapabilityCard from './card';
import { capabilities } from '@/data/capabilities';
import type { Locale } from '@/i18n/routing';

export default async function Capabilities() {
  const t = await getTranslations('landing-page.capabilities');
  const locale = (await getLocale()) as Locale;

  return (
    <section id="capabilities" className="spacing max-container relative">
      <SectionTitle
        title={t('title')}
        subtitle={t('subtitle')}
        locale={locale}
        align="text-center"
      />

      <ul className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {capabilities(t).map((capability) => (
          <CapabilityCard
            key={capability.title}
            capability={capability}
            locale={locale}
          />
        ))}
      </ul>
    </section>
  );
}
