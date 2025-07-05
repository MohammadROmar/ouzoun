import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

import { Link } from '@/i18n/navigation';
import Title from '@/components/dashboard/title';
import Heading from '@/components/dashboard/details/heading';
import DetailContainer from '@/components/dashboard/details/detail-container';
import ToolCard from '@/components/dashboard/cards/tool';
import ToolsIcon from '@/assets/icons/tools';
import ImplantIcon from '@/assets/icons/implant';
import { kits } from '@/data/dummy/kits';
import { getToolDimentions } from '@/utils/details/implant';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('kits-page.titles');

  return { title: t('details') };
}

type KitDetailsPageProps = { params: Promise<{ locale: string; id: string }> };

export default async function KitDetailsPage({ params }: KitDetailsPageProps) {
  const { id: kitId } = await params;

  const kit = kits.find((kit) => kit.id === kitId);

  if (!kit) {
    return notFound();
  }

  const t = await getTranslations('kits-page');

  return (
    <article className="space-y-4">
      <Title title={t('titles.details')} />

      <Heading title={kit.name} action={`/kits/${kitId}/edit`} t={t} />

      <DetailContainer title={t('item.tools')} icon={ToolsIcon}>
        <ul className="grid grid-cols-1 grid-rows-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {kit.tools.slice(0, 3).map((tool) => (
            <ToolCard
              key={tool.id}
              tool={tool}
              className="bg-bg-secondary dark:shadow-white/15"
            />
          ))}
        </ul>

        {kit.tools.length > 3 && (
          <div className="mt-3 flex w-full justify-center">
            <Link
              href={`/kits/${kitId}/tools`}
              className="button flex w-full justify-center md:w-fit"
            >
              {t('actions.more')}
            </Link>
          </div>
        )}

        {kit.tools.length === 0 && (
          <p className="text-center">{t('no-tools')}</p>
        )}
      </DetailContainer>

      {kit.implant && (
        <DetailContainer title={t('item.implant')} icon={ImplantIcon}>
          <>
            <h4 className="ltr:font-ubuntu w-fit text-lg md:text-xl">
              {kit.implant.name}
            </h4>

            <ul className="mt-2 flex gap-3">
              {Object.entries(getToolDimentions(kit.implant, t)).map(
                ([key, value]) => (
                  <li key={key ? `${key}-${value}` : value}>
                    <p className="flex flex-col">
                      <span className="text-sm opacity-75">{key}</span>
                      <span className="line-clamp-1">{value}</span>
                    </p>
                  </li>
                ),
              )}
            </ul>

            <Link
              href={`/implants/${kit.implant.id}`}
              className="button m-auto mt-2 flex w-fit"
            >
              {t('actions.implant')}
            </Link>
          </>
        </DetailContainer>
      )}
    </article>
  );
}
