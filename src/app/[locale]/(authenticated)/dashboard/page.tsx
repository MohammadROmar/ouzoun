import { getTranslations } from 'next-intl/server';

import Title from '@/shared/components/dashboard/title';
import UserDistribution from '@/features/statistics/components/user-distribution';
import ProceduresCount from '@/features/statistics/components/procedures-count';
import TopByRate from '@/features/statistics/components/top-by-rate';
import TopByAssignments from '@/features/statistics/components/top-by-assignments';
import TopDoctors from '@/features/statistics/components/top-doctors';

export default async function DashboardPage() {
  const t = await getTranslations('dashboard-page');

  return (
    <>
      <Title title={t('title')} />

      <section className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <UserDistribution t={t} />
        <ProceduresCount t={t} />
      </section>

      <section className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <TopByRate t={t} />
        <TopByAssignments t={t} />
      </section>

      <section className="mt-4">
        <TopDoctors t={t} />
      </section>
    </>
  );
}
