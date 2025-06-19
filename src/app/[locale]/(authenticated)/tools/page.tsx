import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import AddProductButton from '@/components/dashboard/add-product-btn';
import { tools } from '@/data/dummy/tools';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('tools-page.titles');

  return { title: t('base') };
}

export default async function ToolsPage() {
  const t = await getTranslations('tools-page');

  return (
    <>
      <section className="flex items-center justify-between">
        <h1 className="ltr:font-ubuntu text-3xl md:text-4xl">
          {' '}
          {t('titles.base')}
        </h1>
        <AddProductButton href="/tools/new" label={t('actions.add-tool')} />
      </section>

      <section>
        <ul>
          {tools.map((tool) => (
            <li key={tool.id}>{tool.name}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
