import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import AddProductButton from '@/shared/components/dashboard/add-product-btn';
import KitCard from '@/features/kits/components/card';
import NoContent from '@/shared/components/no-content';
import ErrorHandler from '@/shared/components/error-handler';
import { get } from '@/shared/api/get';
import { Kit } from '@/features/kits/models/kit';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('kits-page.titles');

  return { title: t('base') };
}

export default async function KitsPage() {
  const t = await getTranslations('kits-page');

  const responseData = await get<Kit[]>('/api/kits');

  if (responseData.message !== 'success') {
    return (
      <ErrorHandler
        message={responseData.message}
        status={responseData.data.status}
      />
    );
  }

  const kits = responseData.data;

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
              <KitCard key={kit.id} kit={kit} />
            ))}
          </ul>
        ) : (
          <NoContent />
        )}
      </section>
    </>
  );
}
