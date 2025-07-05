import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

import Title from '@/components/dashboard/title';
import KitForm from '@/components/dashboard/forms/kit';
import { kits } from '@/data/dummy/kits';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('kits-page.titles');

  return { title: t('edit') };
}

type Props = { params: Promise<{ locale: string; id: string }> };

export default async function EditKitPage({ params }: Props) {
  const { id: kitId } = await params;

  const kit = kits.find((kit) => kit.id === kitId);

  if (!kit) {
    return notFound();
  }

  const t = await getTranslations('kits-page');

  return (
    <>
      <Title title={t('titles.edit')} />

      <section className="mt-4">
        <KitForm
          action="EDIT"
          defaultValues={{ name: kit.name, image: new File([], 'empty.png') }}
        />
      </section>
    </>
  );
}
