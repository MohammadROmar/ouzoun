import { getLocale, getTranslations } from 'next-intl/server';

import SectionTitle from '@/components/shared/section-title';
import Image from '../image';
import dentalCheckUpImg from '@/assets/images/dental-check-up.png';
import type { Locale } from '@/i18n/routing';
import { features } from '@/data/features';
import Feature from './feature';

export default async function WhyUs() {
  const t = await getTranslations('landing-page.why-us');
  const locale = (await getLocale()) as Locale;

  return (
    <section
      id="why-us"
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
        image={dentalCheckUpImg}
        alt="An image of a young woman receiving dental check up."
      />
    </section>
  );
}
