import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

import LogoutIcon from '@/assets/icons/logout';

export default async function LogoutButton() {
  const t = await getTranslations('dashboard-page');

  async function handleLogout() {
    'use server';

    (await cookies()).delete('access-token');

    redirect('/');
  }

  return (
    <div className="flex size-full flex-col justify-end">
      <form
        action={handleLogout}
        className="group h-fit w-full rounded-xl text-red-400 transition-colors hover:bg-red-400 hover:text-white"
      >
        <button className="flex w-full cursor-pointer items-center gap-4 p-2 transition-transform group-hover:scale-95">
          <span>
            <LogoutIcon className="size-7 md:size-5" />
          </span>
          <span className="text-lg">{t('logout')}</span>
        </button>
      </form>
    </div>
  );
}
