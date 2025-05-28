import { getLocale, getTranslations } from 'next-intl/server';

import SectionTitle from '@/components/shared/section-title';
import Feature from './feature';
import Image from '../image';
import { features } from '@/data/features';
import dashboardImg from '@/assets/images/dashboard.png';
import type { Locale } from '@/i18n/routing';

export default async function Overview() {
  const t = await getTranslations('landing-page.overview');
  const locale = (await getLocale()) as Locale;

  return (
    <section
      id="overview"
      className="max-container spacing flex justify-between gap-6 max-lg:flex-col lg:items-center lg:gap-12"
    >
      <div className="flex-1">
        <SectionTitle
          title={t('title')}
          subtitle={t('subtitle')}
          locale={locale}
          align="text-start"
        />

        <ul className="mt-6 space-y-2">
          {features(t).map((feature) => (
            <Feature key={feature.title} {...feature} locale={locale} />
          ))}
        </ul>
      </div>

      <Image
        src={dashboardImg}
        alt="An image a person controlling a dashboard."
      />
    </section>
  );
}
