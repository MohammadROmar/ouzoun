'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { useDialog } from '@/shared/hooks/use-dialog';
import Modal from '@/shared/components/modal';
import DeleteAssistantForm from './form';
import DeleteIcon from '@/assets/icons/delete';
import WarningIocn from '@/assets/icons/warning';

type DeleteAssistantProps = { assistantId: string };

function DeleteAssistant({ assistantId }: DeleteAssistantProps) {
  const [open, setOpen] = useState(false);
  const dialogRef = useDialog(open);

  console.log(open);

  const t = useTranslations('assistants-page.all.delete');

  return (
    <>
      {/* {open && ( */}
      <Modal
        ref={dialogRef}
        title={t('title')}
        description={t('modal-body')}
        icon={<WarningIocn className="text-danger modal-icon" />}
        onClose={() => setOpen(false)}
        titleStyles="text-danger"
      >
        <DeleteAssistantForm
          t={t}
          assistantId={assistantId}
          close={() => setOpen(false)}
        />
      </Modal>
      {/* )} */}

      <button
        title={t('button')}
        aria-label={t('button')}
        onClick={() => setOpen(true)}
        className="bg-gray hover:bg-danger size-6 cursor-pointer rounded-sm p-1 transition-colors duration-500"
      >
        <DeleteIcon className="aspect-square size-full" />
      </button>
    </>
  );
}

export default DeleteAssistant;
