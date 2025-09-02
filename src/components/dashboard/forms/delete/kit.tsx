'use client';

import { useActionState } from 'react';
import { useTranslations } from 'next-intl';

import { useDialog } from '@/hooks/use-dialog';
import Modal from '@/components/modal';
import FormErrors from '../errors';
import ModalActions from './actions';
import WarningIcon from '@/assets/icons/warning';
import { deleteKitAction } from '@/actions/kit';

type DeleteKitModalProps = { id: string; open: boolean; close: () => void };

function DeleteKitModal({ id, open, close }: DeleteKitModalProps) {
  const t = useTranslations();

  const dialogRef = useDialog(open);

  const [state, formAction] = useActionState(deleteKitAction, {
    id,
    message: undefined,
  });

  return (
    <Modal
      ref={dialogRef}
      title={t('modal.delete.title')}
      description={t('modal.delete.description')}
      titleStyles="text-danger"
      onClose={close}
      icon={<WarningIcon className="text-danger modal-icon" />}
    >
      <form action={formAction}>
        <ModalActions close={close} />
      </form>

      <FormErrors message={state.message} />
    </Modal>
  );
}

export default DeleteKitModal;
