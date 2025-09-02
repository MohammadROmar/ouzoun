import { getTranslations } from 'next-intl/server';

import SectionTitle from '@/shared/components/section-title';
import CapabilityCard from './card';
import { capabilities } from '../../utils/get-capabilities';

export default async function Capabilities() {
  const t = await getTranslations('landing-page.capabilities');

  return (
    <section id="capabilities" className="spacing max-container relative">
      <SectionTitle
        title={t('title')}
        subtitle={t('subtitle')}
        align="text-center"
      />

      <ul className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {capabilities(t).map((capability) => (
          <CapabilityCard key={capability.title} capability={capability} />
        ))}
      </ul>
    </section>
  );
}
