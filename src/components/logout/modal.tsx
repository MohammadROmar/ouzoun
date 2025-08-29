'use client';

import { useTranslations } from 'next-intl';

import { useDialog } from '@/hooks/use-dialog';
import Modal from '@/components/modal';
import ModalActions from '../dashboard/forms/delete/actions';
import WarningIcon from '@/assets/icons/warning';
import { logoutAction } from '@/actions/logout';

type LogoutModalProps = { open: boolean; close: () => void };

function LogoutModal({ open, close }: LogoutModalProps) {
  const t = useTranslations('modal');

  const dialogRef = useDialog(open);

  return (
    <Modal
      ref={dialogRef}
      title={t('logout.title')}
      description={t('logout.description')}
      titleStyles="text-danger"
      onClose={close}
    >
      <form action={logoutAction}>
        <ModalActions close={close} />
      </form>

      <WarningIcon className="text-danger modal-icon" />
    </Modal>
  );
}

export default LogoutModal;
