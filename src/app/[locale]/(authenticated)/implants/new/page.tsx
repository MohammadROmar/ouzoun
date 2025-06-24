import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import Title from '@/components/dashboard/title';
import ImplantForm from '@/components/dashboard/forms/implant';

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
        <ImplantForm action="CREATE" />
      </section>
    </>
  );
}
