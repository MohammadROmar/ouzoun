import { getTranslations } from 'next-intl/server';

import Title from '@/components/dashboard/title';

export default async function AssignAssistantsPage() {
  const t = await getTranslations('assistants-page.assign');

  return (
    <section>
      <Title title={t('title')} />
    </section>
  );
}
