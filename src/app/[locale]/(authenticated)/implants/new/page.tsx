import { getTranslations } from 'next-intl/server';

import Title from '@/components/dashboard/title';
import ImplantInfo from '@/components/dashboard/create/implant/info';
import ImplantDimentions from '@/components/dashboard/create/implant/dimentions';
import ImplantSourceAndStock from '@/components/dashboard/create/implant/source-stock';
import CreateImplantAction from '@/components/dashboard/create/implant/action';

export default async function CreateImplantPage() {
  const t = await getTranslations('implants-page');

  return (
    <>
      <Title title={t('action')} />

      <section className="mt-4">
        <form className="space-y-4">
          <ImplantInfo t={t} />

          <ImplantDimentions t={t} />

          <ImplantSourceAndStock t={t} />

          <CreateImplantAction t={t} />
        </form>
      </section>
    </>
  );
}
