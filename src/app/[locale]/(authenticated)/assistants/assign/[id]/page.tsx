import { getTranslations } from 'next-intl/server';

import ProcedureInfo from '@/features/assistants/components/assign/info';
import Title from '@/shared/components/dashboard/title';
import ProcedureAssistants from '@/features/assistants/components/assign/assistants';
import RequiredTools from '@/features/assistants/components/assign/required-tools';
import ImplantKits from '@/features/assistants/components/assign/implant-kits';
import SurgicalKits from '@/features/assistants/components/assign/surgical-kits';
import { get } from '@/shared/api/get';
import { DetailedProcedure } from '@/features/assistants/models/detailed-procedure';

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
