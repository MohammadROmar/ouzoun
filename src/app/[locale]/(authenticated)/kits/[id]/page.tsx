import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import Title from '@/shared/components/dashboard/title';
import Heading from '@/shared/components/dashboard/heading';
import DetailContainer from '@/shared/components/dashboard/detail-container';
import ToolCard from '@/features/tools/components/card';
import ImplantCard from '@/features/implants/components/card';
import * as Actions from '@/shared/components/dashboard/product-actions';
import ToolsIcon from '@/assets/icons/tools';
import ImplantIcon from '@/assets/icons/implant';
import MainIcon from '@/assets/icons/main';
import ErrorHandler from '@/shared/components/error-handler';
import { get } from '@/shared/api/get';
import kitImg from '@/assets/images/kit.png';
import { Kit } from '@/features/kits/models/kit';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('kits-page.titles');

  return { title: t('details') };
}

type KitDetailsPageProps = { params: Promise<{ locale: string; id: string }> };

export default async function KitDetailsPage({ params }: KitDetailsPageProps) {
  const { id: kitId } = await params;
  const responseData = await get<Kit>(`/api/kits/${kitId}`);

  if (responseData.message !== 'success') {
    return (
      <ErrorHandler
        message={responseData.message}
        status={responseData.data.status}
      />
    );
  }

  const kit = responseData.data;

  const t = await getTranslations('kits-page');

  return (
    <article className="space-y-4">
      <Title title={t('titles.details')} />

      <Heading
        item="kits"
        id={kitId}
        title={kit.name}
        t={t}
        fallbackImage={kitImg}
        imagePath={`/api/images?imagePath=${kit.imagePath}`}
      />

      <DetailContainer title={t('item.main')} icon={MainIcon}>
        <p>{t(kit.isMainKit ? 'item.is-main' : 'item.not-main')}</p>
      </DetailContainer>

      <DetailContainer title={t('item.tools')} icon={ToolsIcon}>
        <ul className="grid grid-cols-1 grid-rows-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {kit.tools.map((tool) => (
            <ToolCard
              key={tool.id}
              tool={tool}
              className="bg-bg-secondary dark:shadow-white/15"
            />
          ))}
        </ul>

        {kit.tools.length === 0 && (
          <p className="text-center">{t('no-tools')}</p>
        )}
      </DetailContainer>

      <DetailContainer title={t('item.implant')} icon={ImplantIcon}>
        <ul className="grid grid-cols-1 grid-rows-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {kit.implants.map((implant) => (
            <ImplantCard
              key={implant.id}
              implant={implant}
              className="bg-bg-secondary dark:shadow-white/15"
            />
          ))}
        </ul>

        {kit.implants.length === 0 && (
          <p className="text-center">{t('no-implants')}</p>
        )}
      </DetailContainer>

      <section className="grid h-full md:hidden">
        <Actions.Root item="kits" id={kitId}>
          <Actions.Delete />
        </Actions.Root>
      </section>
    </article>
  );
}
