'use client';

import { redirect } from 'next/navigation';
import { useRef, useEffect, useActionState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { toast } from 'react-toastify';

import Modal from '@/components/modal';
import ModalActions from './actions';
import { deleteKitAction } from '@/actions/kit';

type DeleteKitModalProps = { id: string; open: boolean; close: () => void };

function DeleteKitModal({ id, open, close }: DeleteKitModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const locale = useLocale();
  const t = useTranslations();

  const [state, formAction] = useActionState(deleteKitAction, {
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
      toast.success(t('kits-page.actions.deleted'));
      redirect(`/${locale}/kits`);
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
    </Modal>
  );
}

export default DeleteKitModal;
