import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

import Title from '@/components/dashboard/title';
import ToolForm from '@/components/dashboard/forms/tool';

import { toolToInputs } from '@/utils/tool-to-input';
import { Tool } from '@/models/tool';
import { get } from '@/actions/get';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('tools-page.titles');

  return { title: t('edit') };
}

type Props = { params: Promise<{ locale: string; id: string }> };

export default async function ToolEditPage({ params }: Props) {
  const toolId = (await params).id;
  const tool = (await get(`/api/tools/${toolId}`)) as Tool;

  if (!tool) {
    return notFound();
  }

  const t = await getTranslations('tools-page');

  const toolAsInput = toolToInputs(tool);

  return (
    <>
      <Title title={t('titles.edit')} />

      <section className="mt-4">
        <ToolForm action="EDIT" defaultValues={toolAsInput} />
      </section>
    </>
  );
}
