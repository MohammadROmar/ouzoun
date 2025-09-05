import { getTranslations } from 'next-intl/server';

import Title from '@/shared/components/dashboard/title';
import WarningIcon from '@/assets/icons/warning';

async function EditAccountPage() {
  const t = await getTranslations('account-page');

  return (
    <>
      <Title title={t('edit-page.title')} />

      <section className="mt-4">
        <p className="flex items-center gap-1 text-sm">
          <span>
            <WarningIcon className="text-warning size-4" />
          </span>
          <span className="text-warning">{t('note')}:</span>
          <span>{t('keep-empty')}</span>
        </p>
      </section>

      <section className="mt-4"></section>
    </>
  );
}

export default EditAccountPage;
