import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

import Title from '@/components/dashboard/title';
import ToolCard from '@/components/dashboard/cards/tool';
import { kits } from '@/data/dummy/kits';

type KitToolsPageProps = { params: Promise<{ locale: string; id: string }> };

async function KitToolsPage({ params }: KitToolsPageProps) {
  const { id: kitId } = await params;

  const kit = kits.find((kit) => kit.id === kitId);

  if (!kit) {
    return notFound();
  }

  const t = await getTranslations('kits-page');

  return (
    <>
      <Title title={t('titles.kit-tools')} />

      <section className="mt-4">
        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {kit.tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </ul>
      </section>
    </>
  );
}

export default KitToolsPage;
