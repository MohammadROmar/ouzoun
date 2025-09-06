import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import Title from '@/shared/components/dashboard/title';
import Heading from '@/shared/components/dashboard/heading';
import Detail from '@/shared/components/dashboard/detail';
import * as Actions from '@/shared/components/dashboard/product-actions';
import FileIcon from '@/assets/icons/file';
import DimensionsIcon from '@/assets/icons/dimensions';
import BoxIcon from '@/assets/icons/box';
import ErrorHandler from '@/shared/components/error-handler';
import {
  getToolDimentions,
  getToolSourceStock,
} from '@/features/implants/utils/details';
import { get } from '@/shared/api/get';
import implantImg from '@/assets/images/implant.png';
import { Implant } from '@/features/implants/models/implant';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('implants-page.titles');

  return { title: t('details') };
}

type Props = { params: Promise<{ locale: string; id: string }> };

async function ImplantDetailsPage({ params }: Props) {
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

  return (
    <article className="flex flex-col justify-between gap-4 max-md:min-h-[calc(100vh_-_5.5rem)]">
      <div className="space-y-4">
        <Title title={t('titles.details')} />
        <Heading
          item="implants"
          id={implantId}
          t={t}
          title={implant.brand}
          kitId={implant.kitId}
          fallbackImage={implantImg}
          imagePath={`/api/images?imagePath=${implant.imagePath}`}
        />
        <Detail
          title={t('item.description')}
          icon={FileIcon}
          details={implant.description}
        />
        <Detail
          title={t('titles.dimensions')}
          icon={DimensionsIcon}
          details={getToolDimentions(implant, t)}
        />
        <Detail
          title={t('titles.source-stock')}
          icon={BoxIcon}
          details={getToolSourceStock(implant, t)}
        />
      </div>

      <section className="grid h-full md:hidden">
        <Actions.Root item="implants" id={implantId} kitId={implant.kitId}>
          <div className="flex items-center gap-2 max-md:grid max-md:grid-cols-2 max-md:justify-end">
            <Actions.Edit />
            <Actions.Delete />
          </div>
          <Actions.Kit />
        </Actions.Root>
      </section>
    </article>
  );
}

export default ImplantDetailsPage;
