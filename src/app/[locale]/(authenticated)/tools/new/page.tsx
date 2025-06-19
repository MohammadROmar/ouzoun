import Title from '@/components/dashboard/title';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('tools-page.titles');

  return { title: t('new') };
}

export default async function CreateToolPage() {
  const t = await getTranslations('tools-page');

  return (
    <>
      <Title title={t('titles.new')} />
    </>
  );
}
