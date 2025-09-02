import { getTranslations } from 'next-intl/server';

import ProcedureInfo from '@/components/dashboard/details/procedure/info';
import Title from '@/components/dashboard/title';
import ProcedureAssistants from '@/components/dashboard/details/procedure/assistants';
import RequiredTools from '@/components/dashboard/details/procedure/required-tools';
import ImplantKits from '@/components/dashboard/details/procedure/implant-kits';
import SurgicalKits from '@/components/dashboard/details/procedure/surgical-kits';
import { get } from '@/actions/get';
import { DetailedProcedure } from '@/models/detailed-procedure';

type ProcedureDetailsPageProps = {
  params: Promise<{ locale: string; id: string }>;
};

async function ProcedureDetailsPage({ params }: ProcedureDetailsPageProps) {
  const { id } = await params;

  const t = await getTranslations('assistants-page.assign.procedure-details');

  const procedure = (await get(`/api/procedures/${id}`)) as DetailedProcedure;

  return (
    <>
      <Title title={t('title')} />

      <ProcedureInfo procedure={procedure} />
      <ProcedureAssistants
        assistants={procedure.assistants}
        numberOfAsisstants={procedure.numberOfAsisstants}
        t={t}
      />
      <RequiredTools tools={procedure.requiredTools} t={t} />
      <ImplantKits implantKits={procedure.implantKits} t={t} />
      <SurgicalKits kits={procedure.surgicalKits} t={t} />
    </>
  );
}

export default ProcedureDetailsPage;
