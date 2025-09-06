import { getTranslations } from 'next-intl/server';

import Title from '@/shared/components/dashboard/title';
import AssistantCard from '@/features/assistants/components/assistant-card';
import ErrorHandler from '@/shared/components/error-handler';
import { get } from '@/shared/api/get';
import { User } from '@/core/models/user';

async function AllAssistantsPage() {
  const t = await getTranslations('assistants-page.all');

  const responseData = await get<User[]>('/api/users?role=AssistantDoctor');

  if (responseData.message !== 'success') {
    return (
      <ErrorHandler
        message={responseData.message}
        status={responseData.data.status}
      />
    );
  }

  const assistants = responseData.data;

  return (
    <>
      <Title title={t('title')} />

      <section className="mt-4">
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {assistants.map((assistant) => (
            <AssistantCard key={assistant.id} assistant={assistant} />
          ))}
        </ul>
      </section>
    </>
  );
}

export default AllAssistantsPage;
