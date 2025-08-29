'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

import LogoutModal from './modal';
import LogoutIcon from '@/assets/icons/logout';

export default function LogoutButton() {
  const [open, setOpen] = useState(false);
  const t = useTranslations('dashboard-page');

  return (
    <>
      <LogoutModal open={open} close={() => setOpen(false)} />

      <div className="flex size-full flex-col justify-end">
        <div className="group h-fit w-full rounded-xl text-red-400 transition-colors hover:bg-red-400 hover:text-white">
          <button
            onClick={() => setOpen(true)}
            className="flex w-full cursor-pointer items-center gap-4 p-2 transition-transform group-hover:scale-95"
          >
            <span>
              <LogoutIcon className="size-7 md:size-5" />
            </span>
            <span className="text-lg">{t('logout')}</span>
          </button>
        </div>
      </div>
    </>
  );
}
