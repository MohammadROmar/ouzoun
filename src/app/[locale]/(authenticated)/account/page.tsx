import { getTranslations } from 'next-intl/server';

import Title from '@/shared/components/dashboard/title';
import UserInfo from '@/features/user/components/user-info';
import UserContactAndClinic from '@/features/user/components/contact-n-clinic';
import UserActions from '@/features/user/components/user-actions';
import { get } from '@/shared/api/get';
import { User } from '@/core/models/user';

async function AccountPage() {
  const user = (await get('/api/users/current')) as User;

  const t = await getTranslations('account-page');

  return (
    <>
      <Title title={t('title')} />

      <UserInfo user={user} />
      <UserContactAndClinic user={user} t={t} />
      <UserActions
        edit={{ label: t('edit'), href: '/account/edit' }}
        changePassword={{
          label: t('change-password'),
          href: '/account/change-password',
        }}
      />
    </>
  );
}

export default AccountPage;
