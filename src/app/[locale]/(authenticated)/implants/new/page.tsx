import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import Title from '@/components/dashboard/title';
import CreateImplantForm from '@/components/dashboard/implant-form';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('implants-page.titles');

  return { title: t('new') };
}

export default async function CreateImplantPage() {
  const t = await getTranslations('implants-page');

  return (
    <>
      <Title title={t('titles.new')} />

      <section className="mt-4">
        <CreateImplantForm action="CREATE" />
      </section>
    </>
  );
}
