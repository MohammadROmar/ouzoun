'use client';

import { redirect } from 'next/navigation';
import { useRef, useEffect, useActionState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { toast } from 'react-toastify';

import Modal from '@/components/modal';
import ModalActions from './actions';
import WarningIcon from '@/assets/icons/warning';
import { deleteToolAction } from '@/actions/tool';

type DeleteToolModalProps = { id: string; open: boolean; close: () => void };

function DeleteToolModal({ id, open, close }: DeleteToolModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const locale = useLocale();
  const t = useTranslations();

  const [state, formAction] = useActionState(deleteToolAction, {
    id,
    message: undefined,
  });

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }

    if (state.message === 'success') {
      toast.success(t('tools-page.actions.deleted'));
      redirect(`/${locale}/tools`);
    }
  }, [open, state.message, locale, t]);

  return (
    <Modal
      ref={dialogRef}
      title={t('modal.delete.title')}
      description={t('modal.delete.description')}
      titleStyles="text-danger"
    >
      <form action={formAction}>
        <ModalActions close={close} />
      </form>

      <WarningIcon className="text-danger modal-icon" />
    </Modal>
  );
}

export default DeleteToolModal;
