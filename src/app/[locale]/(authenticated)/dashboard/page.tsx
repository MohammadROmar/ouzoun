import { getTranslations } from 'next-intl/server';

export default async function DashboardPage() {
  const t = await getTranslations('dashboard-page');

  return (
    <section>
      <h1 className="text-xl">{t('title')}</h1>
    </section>
  );
}
