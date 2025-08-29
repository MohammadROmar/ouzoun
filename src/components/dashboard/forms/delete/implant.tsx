'use client';

import { useActionState } from 'react';
import { useTranslations } from 'next-intl';

import { useDialog } from '@/hooks/use-dialog';
import Modal from '@/components/modal';
import ModalActions from './actions';
import FormErrors from '../errors';
import WarningIcon from '@/assets/icons/warning';
import { deleteImplantAction } from '@/actions/implant';

type DeleteImplantModalProps = { id: string; open: boolean; close: () => void };

function DeleteImplantModal({ id, open, close }: DeleteImplantModalProps) {
  const t = useTranslations();

  const dialogRef = useDialog(open);

  const [state, formAction] = useActionState(deleteImplantAction, {
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
    >
      <form action={formAction}>
        <ModalActions close={close} />
      </form>

      <WarningIcon className="text-danger modal-icon" />

      <FormErrors message={state.message} />
    </Modal>
  );
}

export default DeleteImplantModal;
