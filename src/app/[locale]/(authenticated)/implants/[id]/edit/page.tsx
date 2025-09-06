import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import Title from '@/shared/components/dashboard/title';
import ImplantForm from '@/features/implants/components/form';
import ErrorHandler from '@/shared/components/error-handler';
import { implantToInputs } from '@/features/implants/utils/implant-to-input';
import { get } from '@/shared/api/get';
import { Implant } from '@/features/implants/models/implant';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('implants-page.titles');

  return { title: t('edit') };
}

type Props = { params: Promise<{ locale: string; id: string }> };

export default async function ImplantEditPage({ params }: Props) {
  const { id: implantId } = await params;
  const responseData = await get<Implant>(`/api/Implants/${implantId}`);

  if (responseData.message !== 'success') {
    return (
      <ErrorHandler
        message={responseData.message}
        status={responseData.data.status}
      />
    );
  }

  const implant = responseData.data;

  const t = await getTranslations('implants-page');

  const implantAsInput = implantToInputs(implant);

  return (
    <>
      <Title title={t('titles.edit')} />

      <section className="mt-4">
        <ImplantForm defaultValues={implantAsInput} action="EDIT" />
      </section>
    </>
  );
}
