import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

import { kits } from '@/data/dummy/kits';
import Title from '@/components/dashboard/title';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('kits-page.titles');

  return { title: t('details') };
}

type KitDetailsPageProps = { params: Promise<{ locale: string; id: string }> };

export default async function KitDetailsPage({ params }: KitDetailsPageProps) {
  const { id: kitId } = await params;

  const kit = kits.find((kit) => kit.id === kitId);

  if (!kit) {
    return notFound();
  }

  const t = await getTranslations('kits-page');

  return (
    <article>
      <Title title={t('titles.details')} />

      <section>
        <h1 className="ltr:font-ubuntu text-3xl md:text-4xl">{kit.name}</h1>
      </section>
    </article>
  );
}
