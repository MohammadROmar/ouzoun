'use client';

import { useActionState } from 'react';
import { useTranslations } from 'next-intl';

import { useDialog } from '@/shared/hooks/use-dialog';
import Modal from '@/shared/components/modal';
import ModalActions from '../../../shared/components/dashboard/modal-actions';
import FormErrors from '../../../shared/components/dashboard/errors';
import WarningIcon from '@/assets/icons/warning';
import { deleteImplantAction } from '../api/delete';

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
      icon={<WarningIcon className="text-danger modal-icon" />}
    >
      <form action={formAction}>
        <ModalActions close={close} />
      </form>

      <FormErrors message={state.message} />
    </Modal>
  );
}

export default DeleteImplantModal;
