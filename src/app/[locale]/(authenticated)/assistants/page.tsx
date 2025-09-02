import { getTranslations } from 'next-intl/server';

import AssistantActionCard from '@/features/assistants/components/assistant-action-card';
import { getAssistantsActions } from '@/features/assistants/utils/get-assistants-actions';

export default async function AssistantsPage() {
  const t = await getTranslations('assistants-page');

  const assistantsActions = getAssistantsActions(t);

  return (
    <section>
      <h1 className="ltr:font-ubuntu text-3xl md:text-4xl">{t('title')}</h1>

      <ul className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {assistantsActions.map((action) => (
          <AssistantActionCard key={action.title} {...action} />
        ))}
      </ul>
    </section>
  );
}
