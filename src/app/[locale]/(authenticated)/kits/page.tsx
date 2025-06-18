import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import AddProductButton from '@/components/dashboard/add-product-btn';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('kits-page');

  return { title: t('title') };
}

export default async function KitsPage() {
  const t = await getTranslations('kits-page');

  return (
    <>
      <section className="flex items-center justify-between">
        <h1 className="ltr:font-ubuntu text-3xl md:text-4xl">{t('title')}</h1>
        <AddProductButton href="/kits/new" label={t('action')} />
      </section>
    </>
  );
}
