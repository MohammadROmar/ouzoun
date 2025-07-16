import { getTranslations } from 'next-intl/server';

import Title from '@/components/dashboard/title';

export default async function AssistantsLeaveRequestsPage() {
  const t = await getTranslations('assistants-page.leave-requests');

  return (
    <section>
      <Title title={t('title')} />
    </section>
  );
}
