'use client';

import { useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';

import Modal from '@/components/modal';
import ModalActions from '../dashboard/forms/delete/actions';
import WarningIcon from '@/assets/icons/warning';
import { logoutAction } from '@/actions/logout';

type DeleteImplantModalProps = { open: boolean; close: () => void };

function LogoutModal({ open, close }: DeleteImplantModalProps) {
  const t = useTranslations('modal');
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  return (
    <Modal
      ref={dialogRef}
      title={t('logout.title')}
      description={t('logout.description')}
      titleStyles="text-danger"
    >
      <form action={logoutAction}>
        <ModalActions close={close} />
      </form>

      <WarningIcon className="text-danger modal-icon" />
    </Modal>
  );
}

export default LogoutModal;
