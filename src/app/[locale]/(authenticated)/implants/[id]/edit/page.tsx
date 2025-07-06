import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

import Title from '@/components/dashboard/title';
import ImplantForm from '@/components/dashboard/forms/implant';
import { implants } from '@/data/dummy/implants';
import { implantToInputs } from '@/utils/implant-to-input';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('implants-page.titles');

  return { title: t('edit') };
}

type Props = { params: Promise<{ locale: string; id: string }> };

export default async function ImplantEditPage({ params }: Props) {
  const { id: implantId } = await params;

  const implant = implants.find((implant) => implant.id === implantId);

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
