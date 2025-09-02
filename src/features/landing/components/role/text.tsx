import { getTranslations } from 'next-intl/server';

import SectionTitle from '@/shared/components/section-title';

export default async function RoleText() {
  const t = await getTranslations('landing-page.role');

  return (
    <div className="flex-1">
      <SectionTitle
        title={t('title')}
        subtitle={t('subtitle')}
        align="text-start"
      />

      <p className="text-gray mt-4 text-sm">{t('body')}</p>

      <h4 className="ltr:font-ubuntu mt-6 text-2xl font-medium md:text-3xl lg:text-4xl">
        {t('subtitle2')}
      </h4>

      <p className="text-gray mt-4 text-sm">{t('body2')}</p>
    </div>
  );
}
