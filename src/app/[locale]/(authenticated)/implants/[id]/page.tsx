import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

import Title from '@/components/dashboard/title';
import ImplantHeading from '@/components/dashboard/details/implant/heading';
import Detail from '@/components/dashboard/details/implant/detail';
import ImplantActions from '@/components/dashboard/details/implant/actions';
import { getDimentions, getSourceStock } from '@/utils/details/implant';
import { implants } from '@/data/dummy/implants';
import FileIcon from '@/assets/icons/file';
import DimensionsIcon from '@/assets/icons/dimensions';
import BoxIcon from '@/assets/icons/box';

type Props = { params: Promise<{ locale: string; id: string }> };

async function ImplantDetailsPage({ params }: Props) {
  const { id: implantId } = await params;

  const implant = implants.find((implant) => implant.id === implantId);

  if (!implant) {
    return notFound();
  }

  const t = await getTranslations('implants-page');

  return (
    <article className="space-y-4">
      <Title title={t('details.title')} />

      <ImplantHeading
        title={implant.name}
        kitId={implant.kitId}
        action={t('kit')}
      />

      <Detail
        title={t('description')}
        icon={FileIcon}
        details={implant.description}
      />

      <Detail
        title={t('dimensions')}
        icon={DimensionsIcon}
        details={getDimentions(implant, t)}
      />

      <Detail
        title={t('source-stock')}
        icon={BoxIcon}
        details={getSourceStock(implant, t)}
      />

      <ImplantActions implantId={implant.id} t={t} />
    </article>
  );
}

export default ImplantDetailsPage;
