import { getTranslations } from 'next-intl/server';

import KitIcon from '@/assets/icons/kit';
import ProcedureInfo from '@/components/dashboard/details/procedure/info';
import Title from '@/components/dashboard/title';
import { get } from '@/actions/get';
import { DetailedProcedure } from '@/models/detailed-procedure';

type ProcedureDetailsPageProps = {
  params: Promise<{ locale: string; id: string }>;
};

async function ProcedureDetailsPage({ params }: ProcedureDetailsPageProps) {
  const { id } = await params;

  const t = await getTranslations('assistants-page.assign');

  const procedure = (await get(`/api/procedures/${id}`)) as DetailedProcedure;

  return (
    <>
      <Title title={t('procedure-details.title')} />

      <ProcedureInfo procedure={procedure} t={t} />

      <section className="mt-4">
        <div className="text-green border-b-gray/50 flex items-center gap-4 border-b">
          <KitIcon className="size-8" />
          <h2 className="ltr:font-ubuntu text-3xl">{procedure.categoryId}</h2>
        </div>
      </section>
    </>
  );
}

export default ProcedureDetailsPage;
