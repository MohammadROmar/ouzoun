import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import Title from '@/components/dashboard/title';
import ToolForm from '@/components/dashboard/forms/tool';

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
