import { getTranslations } from 'next-intl/server';

import Title from '@/shared/components/dashboard/title';
import ChangePasswordForm from '@/features/auth/components/change-password/form';

async function ChangePasswordPage() {
  const t = await getTranslations('account-page');

  return (
    <>
      <Title title={t('change-password')} />

      <section className="mt-4">
        <ChangePasswordForm />
      </section>
    </>
  );
}

export default ChangePasswordPage;
