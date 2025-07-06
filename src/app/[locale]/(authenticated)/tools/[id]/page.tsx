import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

import { tools } from '@/data/dummy/tools';
import Title from '@/components/dashboard/title';
import Heading from '@/components/dashboard/details/heading';
import Detail from '@/components/dashboard/details/detail';
import DimensionsIcon from '@/assets/icons/dimensions';
import BoxIcon from '@/assets/icons/box';
import Actions from '@/components/dashboard/actions';
import { getToolDimensions, getToolStock } from '@/utils/details/tool';

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
    <article className="flex flex-col justify-between gap-4 max-md:min-h-[calc(100vh_-_5.5rem)]">
      <div className="space-y-4">
        <Title title={t('titles.details')} />

        <Heading
          item="tools"
          id={toolId}
          t={t}
          title={tool.name}
          kitId={tool.kitId}
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
        <Actions item="tools" id={toolId} kitId={tool.kitId} t={t} />
      </section>
    </article>
  );
}
