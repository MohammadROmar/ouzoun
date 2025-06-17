import { getTranslations } from 'next-intl/server';

export default async function DashboardPage() {
  const t = await getTranslations('dashboard-page');

  return (
    <section>
      <h1 className="ltr:font-ubuntu text-3xl md:text-4xl">{t('title')}</h1>
    </section>
  );
}
