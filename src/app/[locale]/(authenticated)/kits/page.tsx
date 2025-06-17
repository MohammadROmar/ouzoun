import { getTranslations } from 'next-intl/server';

import AddProductButton from '@/components/dashboard/add-product-btn';

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
