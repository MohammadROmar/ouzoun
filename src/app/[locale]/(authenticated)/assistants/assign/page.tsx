import { cookies } from 'next/headers';
import { getTranslations } from 'next-intl/server';

import Title from '@/components/dashboard/title';
import ProcedureCard from '@/components/dashboard/cards/procedure-card';
import { Procedure } from '@/models/procedure';

export default async function AssignAssistantsPage() {
  const t = await getTranslations('assistants-page.assign');

  const accessToken = (await cookies()).get('access-token')?.value;
  const response = await fetch(
    `${process.env.BASE_URL}/api/procedures/FilteredProcedure`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify([]),
    },
  );

  const procedures = (await response.json()) as Procedure[];

  return (
    <>
      <Title title={t('title')} />

      <section className="mt-4">
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {procedures.map((procedure) => (
            <ProcedureCard key={procedure.id} procedure={procedure} t={t} />
          ))}
        </ul>
      </section>
    </>
  );
}
