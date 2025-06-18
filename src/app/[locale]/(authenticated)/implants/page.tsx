import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import AddProductButton from '@/components/dashboard/add-product-btn';
import ImplantCard from '@/components/dashboard/implant-card';
import { implants } from '@/data/dummy/implants';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('implants-page');

  return { title: t('title') };
}

export default async function ImplantsPage() {
  const t = await getTranslations('implants-page');

  return (
    <>
      <section className="flex items-center justify-between">
        <h1 className="ltr:font-ubuntu text-3xl md:text-4xl">{t('title')}</h1>
        <AddProductButton href="/implants/new" label={t('action')} />
      </section>

      <section>
        <ul className="mt-4 grid auto-rows-fr grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {implants.map((implant) => (
            <ImplantCard key={implant.id} implant={implant} />
          ))}
        </ul>
      </section>
    </>
  );
}
