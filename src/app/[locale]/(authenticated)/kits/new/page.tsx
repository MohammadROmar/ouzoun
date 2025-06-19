import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import Title from '@/components/dashboard/title';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('kits-page.titles');

  return { title: t('new') };
}

export default async function CreateKitPage() {
  const t = await getTranslations('kits-page');

  return (
    <>
      <Title title={t('titles.new')} />
    </>
  );
}
