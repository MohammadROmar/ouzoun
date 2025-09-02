import { useActionState } from 'react';

import { useDialog } from '@/shared/hooks/use-dialog';
import Modal from '@/shared/components/modal';
import StatusOptions from './options';
import Input from '@/shared/components/input';
import ChangeStatusActions from './change-actions';
import FormErrors from '../../../../../shared/components/dashboard/errors';
import { changeHolidayStatusAction } from '@/features/assistants/api/change-holiday-status';
import { Holiday } from '@/features/assistants/models/holiday';

export type ModalProps = { close: () => void; t: (key: string) => string };

type ChangeStatusProps = ModalProps & { holiday: Holiday; open: boolean };

function ChangeStatus({ holiday, open, close, t }: ChangeStatusProps) {
  const [state, formAction, pending] = useActionState(
    changeHolidayStatusAction,
    {
      id: holiday.id.toString(),
      message: undefined,
      defaultValues: { note: '', status: holiday.status.toString() },
    },
  );

  const dialogRef = useDialog(open);

  return (
    <Modal ref={dialogRef} title={t('holiday.modal.title')} onClose={close}>
      <form className="mt-4 flex flex-col" action={formAction}>
        <label htmlFor="status">{t('holiday.status')}</label>
        <StatusOptions t={t} state={state} />

        <Input
          as="textarea"
          id="note"
          label={t('holiday.note')}
          required
          autoComplete="off"
          defaultValue={state.defaultValues.note}
          rows={3}
          error={state.errors?.note ? t('holiday.invalid-note') : undefined}
          labelStyles="mt-2"
        />

        <ChangeStatusActions t={t} close={close} pending={pending} />
      </form>

      <FormErrors message={state.message} />
    </Modal>
  );
}

export default ChangeStatus;
