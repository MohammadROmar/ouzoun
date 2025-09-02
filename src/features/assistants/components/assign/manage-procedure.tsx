'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { useDialog } from '@/shared/hooks/use-dialog';
import Modal from '@/shared/components/modal';
import ManageProcedureForm from './manage-procedure-form';
import { User } from '@/core/models/user';
import { DetailedProcedure } from '../../models/detailed-procedure';

type ManageProcedureProps = {
  procedure: DetailedProcedure;
  assistants: User[];
};

function ManageProcedure({ procedure, assistants }: ManageProcedureProps) {
  const [open, setOpen] = useState(false);
  const dialogRef = useDialog(open);

  const t = useTranslations('assistants-page.assign.procedure-details');

  return (
    <>
      <Modal
        ref={dialogRef}
        title={t('manage-procedure')}
        onClose={() => setOpen(false)}
      >
        <ManageProcedureForm
          procedure={procedure}
          assistants={assistants}
          t={t}
          onClose={() => setOpen(false)}
        />
      </Modal>

      <button onClick={() => setOpen(true)} className="button">
        {t('manage')}
      </button>
    </>
  );
}

export default ManageProcedure;
