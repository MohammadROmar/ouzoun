import { getTranslations } from 'next-intl/server';

import Title from '@/shared/components/dashboard/title';
import ProcedureCard from '@/features/assistants/components/assign/procedure-card';
import NoContent from '@/shared/components/no-content';
import ErrorHandler from '@/shared/components/error-handler';
import { getProcedure } from '@/features/assistants/api/get-procedures';

export default async function AssignAssistantsPage() {
  const t = await getTranslations('assistants-page.assign');

  const responseData = await getProcedure();

  if (responseData.message !== 'success') {
    return (
      <ErrorHandler
        message={responseData.message}
        status={responseData.data.status}
      />
    );
  }

  const procedures = responseData.data;

  return (
    <>
      <Title title={t('title')} />

      <section className="mt-4">
        {procedures.length > 0 ? (
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {procedures.map((procedure) => (
              <ProcedureCard key={procedure.id} procedure={procedure} t={t} />
            ))}
          </ul>
        ) : (
          <NoContent />
        )}
      </section>
    </>
  );
}
