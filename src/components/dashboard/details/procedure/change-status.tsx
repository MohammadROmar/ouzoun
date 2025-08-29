'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { useDialog } from '@/hooks/use-dialog';
import Modal from '@/components/modal';
import ProcedureStatusForm from './status-form';
import { ProcedureInfoItem } from './info';
import { getProcedureStatus } from '@/utils/procedure-status';

type ChangeProcedureStstusProps = { status: number };

function ChangeProcedureStstus({ status }: ChangeProcedureStstusProps) {
  const [open, setOpen] = useState(false);
  const dialogRef = useDialog(open);

  const t = useTranslations('assistants-page.assign');

  const isPending = status === 0 || status === 1;

  return (
    <>
      {isPending && (
        <Modal
          ref={dialogRef}
          title={'Change Procedure Status'}
          onClose={() => setOpen(false)}
        >
          <ProcedureStatusForm onClose={() => setOpen(false)} t={t} />
        </Modal>
      )}

      <ProcedureInfoItem label={t('procedure-details.status')}>
        <div className="flex items-center gap-2 max-sm:justify-between">
          <p>{t(getProcedureStatus(status))}</p>
          {isPending && (
            <button onClick={() => setOpen(true)} className="button">
              {t('procedure-details.change-status')}
            </button>
          )}
        </div>
      </ProcedureInfoItem>
    </>
  );
}

export default ChangeProcedureStstus;
