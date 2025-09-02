import { getTranslations } from 'next-intl/server';

import SectionTitle from '@/shared/components/section-title';
import Feature from './feature';
import Image from '../image';
import { features } from '../../utils/get-features';
import adminImg from '@/assets/images/admin.png';

export default async function Overview() {
  const t = await getTranslations('landing-page.overview');

  return (
    <section
      id="overview"
      className="max-container spacing flex justify-between gap-6 max-lg:flex-col lg:items-center lg:gap-12"
    >
      <div className="flex-1">
        <SectionTitle
          title={t('title')}
          subtitle={t('subtitle')}
          align="text-start"
        />

        <ul className="mt-6 space-y-2">
          {features(t).map((feature) => (
            <Feature key={feature.title} {...feature} />
          ))}
        </ul>
      </div>

      <Image
        src={adminImg}
        alt="Call center agent focused on laptop, surrounded by chat bubbles representing customer interactions."
      />
    </section>
  );
}
