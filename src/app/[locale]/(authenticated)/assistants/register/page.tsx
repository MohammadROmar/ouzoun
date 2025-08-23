import { getTranslations } from 'next-intl/server';

import Title from '@/components/dashboard/title';
import RegisterAssistantForm from '@/components/dashboard/forms/register-assistant';

export default async function RegisterAssistantsPage() {
  const t = await getTranslations('assistants-page.register');

  return (
    <>
      <Title title={t('title')} />

      <section className="mt-4">
        <RegisterAssistantForm />
      </section>
    </>
  );
}
