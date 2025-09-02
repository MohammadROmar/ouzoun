import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import Title from '@/shared/components/dashboard/title';
import ToolForm from '@/features/tools/components/form';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('tools-page.titles');

  return { title: t('new') };
}

export default async function CreateToolPage() {
  const t = await getTranslations('tools-page');

  return (
    <>
      <Title title={t('titles.new')} />

      <section className="mt-4">
        <ToolForm action="CREATE" />
      </section>
    </>
  );
}
