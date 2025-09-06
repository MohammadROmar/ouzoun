import { getTranslations } from 'next-intl/server';

import Title from '@/shared/components/dashboard/title';
import RecoverAssistantForm from '@/features/assistants/components/recover-form';

type RecoverAssistantPageProps = {
  params: Promise<{ locale: string; id: string }>;
};

async function RecoverAssistantPage({ params }: RecoverAssistantPageProps) {
  const { id } = await params;

  const t = await getTranslations('assistants-page.all.recover');

  return (
    <>
      <Title title={t('title')} />

      <section className="mt-4">
        <RecoverAssistantForm assistantId={id} />
      </section>
    </>
  );
}

export default RecoverAssistantPage;
