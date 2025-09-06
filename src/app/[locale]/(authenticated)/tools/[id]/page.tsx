import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import Title from '@/shared/components/dashboard/title';
import Heading from '@/shared/components/dashboard/heading';
import Detail from '@/shared/components/dashboard/detail';
import DimensionsIcon from '@/assets/icons/dimensions';
import BoxIcon from '@/assets/icons/box';
import * as Actions from '@/shared/components/dashboard/product-actions';
import {
  getToolDimensions,
  getToolStock,
} from '@/features/tools/utils/details';
import ErrorHandler from '@/shared/components/error-handler';
import { get } from '@/shared/api/get';
import toolsImg from '@/assets/images/tools.png';
import { Tool } from '@/features/tools/models/tool';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('tools-page.titles');

  return { title: t('details') };
}

type Props = { params: Promise<{ locale: string; id: string }> };

export default async function ToolDetailsPage({ params }: Props) {
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

  return (
    <article className="flex flex-col justify-between gap-4 max-md:min-h-[calc(100vh_-_5.5rem)]">
      <div className="space-y-4">
        <Title title={t('titles.details')} />

        <Heading
          item="tools"
          id={toolId}
          t={t}
          title={tool.name}
          kitId={tool.kitId}
          fallbackImage={toolsImg}
          imagePath={`/api/images?imagePath=${tool.imagePath}`}
        />

        <Detail
          title={t('titles.dimensions')}
          icon={DimensionsIcon}
          details={getToolDimensions(tool, t)}
        />

        <Detail
          title={t('titles.stock')}
          icon={BoxIcon}
          details={getToolStock(tool, t)}
        />
      </div>

      <section className="grid h-full md:hidden">
        <Actions.Root item="tools" id={toolId} kitId={tool.kitId}>
          <div className="flex items-center gap-2 max-md:grid max-md:grid-cols-2 max-md:justify-end">
            <Actions.Edit />
            <Actions.Delete />
          </div>
          <Actions.Kit />
        </Actions.Root>
      </section>
    </article>
  );
}
