import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import Title from '@/components/dashboard/title';
import KitForm from '@/components/dashboard/forms/kit';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('kits-page.titles');

  return { title: t('new') };
}

export default async function CreateKitPage() {
  const t = await getTranslations('kits-page');

  return (
    <>
      <Title title={t('titles.new')} />

      <section className="mt-4">
        <KitForm action="CREATE" />
      </section>
    </>
  );
}
