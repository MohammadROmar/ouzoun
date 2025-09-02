import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

import Title from '@/shared/components/dashboard/title';
import ImplantForm from '@/features/implants/components/form';
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
  const implant = (await get(`/api/Implants/${implantId}`)) as Implant;

  if (!implant) {
    return notFound();
  }

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
