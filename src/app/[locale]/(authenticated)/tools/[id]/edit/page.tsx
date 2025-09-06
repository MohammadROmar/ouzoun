import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import Title from '@/shared/components/dashboard/title';
import ToolForm from '@/features/tools/components/form';
import ErrorHandler from '@/shared/components/error-handler';
import { toolToInputs } from '@/features/tools/utils/tool-to-input';
import { Tool } from '@/features/tools/models/tool';
import { get } from '@/shared/api/get';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('tools-page.titles');

  return { title: t('edit') };
}

type Props = { params: Promise<{ locale: string; id: string }> };

export default async function ToolEditPage({ params }: Props) {
  const toolId = (await params).id;
  const responseData = await get<Tool>(`/api/tools/${toolId}`);

  if (responseData.message !== 'success') {
    return (
      <ErrorHandler
        message={responseData.message}
        status={responseData.data.status}
      />
    );
  }

  const tool = responseData.data;

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
