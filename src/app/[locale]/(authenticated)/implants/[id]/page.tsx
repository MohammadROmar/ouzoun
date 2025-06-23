import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

import Title from '@/components/dashboard/title';
import ImplantHeading from '@/components/dashboard/details/implant/heading';
import Detail from '@/components/dashboard/details/implant/detail';
import Actions from '@/components/dashboard/actions';
import FileIcon from '@/assets/icons/file';
import DimensionsIcon from '@/assets/icons/dimensions';
import BoxIcon from '@/assets/icons/box';
import { getDimentions, getSourceStock } from '@/utils/details/implant';
import { implants } from '@/data/dummy/implants';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('implants-page.titles');

  return { title: t('details') };
}

type Props = { params: Promise<{ locale: string; id: string }> };

async function ImplantDetailsPage({ params }: Props) {
  const { id: implantId } = await params;

  const implant = implants.find((implant) => implant.id === implantId);

  if (!implant) {
    return notFound();
  }

  const t = await getTranslations('implants-page');

  return (
    <article className="flex flex-col justify-between gap-4 max-md:min-h-[calc(100vh_-_5.5rem)]">
      <div className="space-y-4">
        <Title title={t('titles.details')} />

        <ImplantHeading t={t} implant={implant} />

        <Detail
          title={t('item.description')}
          icon={FileIcon}
          details={implant.description}
        />

        <Detail
          title={t('titles.dimensions')}
          icon={DimensionsIcon}
          details={getDimentions(implant, t)}
        />

        <Detail
          title={t('titles.source-stock')}
          icon={BoxIcon}
          details={getSourceStock(implant, t)}
        />
      </div>

      <section className="grid h-full md:hidden">
        <Actions
          action={`/implants/${implantId}/edit`}
          kitId={implant.kitId}
          t={t}
        />
      </section>
    </article>
  );
}

export default ImplantDetailsPage;
