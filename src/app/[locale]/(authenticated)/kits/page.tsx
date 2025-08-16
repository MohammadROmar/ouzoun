import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import AddProductButton from '@/components/dashboard/add-product-btn';
import KitCard from '@/components/dashboard/cards/kit';
import NoContent from '@/components/no-content';
import { get } from '@/actions/get';
import { Kit } from '@/models/kit';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('kits-page.titles');

  return { title: t('base') };
}

export default async function KitsPage() {
  const t = await getTranslations('kits-page');

  const kits = (await get('/api/kits')) as Kit[];

  return (
    <>
      <section className="flex items-center justify-between">
        <h1 className="ltr:font-ubuntu text-3xl md:text-4xl">
          {t('titles.base')}
        </h1>
        <AddProductButton href="/kits/new" label={t('actions.add-kit')} />
      </section>

      <section className="mt-4">
        {kits.length > 0 ? (
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {kits.map((kit) => (
              <KitCard key={kit.id} kit={kit} t={t} />
            ))}
          </ul>
        ) : (
          <NoContent />
        )}
      </section>
    </>
  );
}
