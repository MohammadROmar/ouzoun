import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

import Title from '@/components/dashboard/title';
import Heading from '@/components/dashboard/details/heading';
import { kits } from '@/data/dummy/kits';

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
    <article className="space-y-4">
      <Title title={t('titles.details')} />

      <Heading title={kit.name} action={`/kits/${kitId}/edit`} t={t} />
    </article>
  );
}
