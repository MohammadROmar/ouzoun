import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import AddProductButton from '@/shared/components/dashboard/add-product-btn';
import ImplantCard from '@/features/implants/components/card';
import NoContent from '@/shared/components/no-content';
import ErrorHandler from '@/shared/components/error-handler';
import { get } from '@/shared/api/get';
import { Implant } from '@/features/implants/models/implant';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('implants-page.titles');

  return { title: t('base') };
}

export default async function ImplantsPage() {
  const t = await getTranslations('implants-page');

  const responseData = await get<Implant[]>('/api/Implants');

  if (responseData.message !== 'success') {
    return (
      <ErrorHandler
        message={responseData.message}
        status={responseData.data.status}
      />
    );
  }

  const implants = responseData.data;

  return (
    <>
      <section className="flex items-center justify-between">
        <h1 className="ltr:font-ubuntu text-3xl md:text-4xl">
          {t('titles.base')}
        </h1>
        <AddProductButton
          href="/implants/new"
          label={t('actions.add-implant')}
        />
      </section>

      <section className="mt-4">
        {implants.length > 0 ? (
          <ul className="grid auto-rows-fr grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {implants.map((implant) => (
              <ImplantCard key={implant.id} implant={implant} />
            ))}
          </ul>
        ) : (
          <NoContent />
        )}
      </section>
    </>
  );
}
