'use client';

import { useActionState } from 'react';
import { useTranslations } from 'next-intl';

import { useDialog } from '@/hooks/use-dialog';
import Modal from '@/components/modal';
import ModalActions from './actions';
import FormErrors from '../errors';
import WarningIcon from '@/assets/icons/warning';
import { deleteToolAction } from '@/actions/tool';

type DeleteToolModalProps = { id: string; open: boolean; close: () => void };

function DeleteToolModal({ id, open, close }: DeleteToolModalProps) {
  const t = useTranslations();

  const dialogRef = useDialog(open);

  const [state, formAction] = useActionState(deleteToolAction, {
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

export default DeleteToolModal;
