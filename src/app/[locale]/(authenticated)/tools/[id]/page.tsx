import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

import Title from '@/components/dashboard/title';
import { tools } from '@/data/dummy/tools';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('tools-page.titles');

  return { title: t('details') };
}

type Props = { params: Promise<{ locale: string; id: string }> };

export default async function ToolDetailsPage({ params }: Props) {
  const toolId = (await params).id;

  const tool = tools.find((tool) => tool.id === toolId);

  if (!tool) {
    return notFound();
  }

  const t = await getTranslations('tools-page');

  return (
    <article>
      <Title title={t('titles.details')} />

      <section></section>
    </article>
  );
}
