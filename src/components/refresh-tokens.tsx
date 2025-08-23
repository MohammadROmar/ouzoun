'use client';

import { useState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { useTranslations } from 'next-intl';

import { useDialog } from '@/hooks/use-dialog';
import Modal from './modal';
import LoadingSpinner from './shared/loading-spinner';
import WarningIcon from '@/assets/icons/warning';
import { logoutAction } from '@/actions/logout';

export default function RefreshTokens() {
  const [hasError, setHasError] = useState(false);
  const dialogRef = useDialog(hasError);

  const t = useTranslations('modal.session-expired');

  useEffect(() => {
    async function refresh() {
      try {
        const res = await fetch('/api/users/token/refresh', { method: 'POST' });

        if (!res.ok) setHasError(true);
      } catch (e) {
        console.log(e);

        setHasError(true);
      }
    }

    refresh();

    const refreshInterval = setInterval(refresh, 25 * 60 * 1000);

    return () => {
      clearInterval(refreshInterval);
    };
  }, []);

  return (
    <Modal ref={dialogRef} title={t('title')} description={t('subtitle')}>
      <form action={logoutAction}>
        <ModalAction t={t} />
      </form>

      <WarningIcon className="text-warning modal-icon" />
    </Modal>
  );
}

function ModalAction({ t }: { t: (key: string) => string }) {
  const { pending } = useFormStatus();

  return (
    <button className="button !bg-warning text-bg-primary" disabled={pending}>
      {pending ? (
        <LoadingSpinner className="size-6 animate-spin" />
      ) : (
        t('action')
      )}
    </button>
  );
}
