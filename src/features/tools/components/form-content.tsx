'use client';

import { redirect, useParams } from 'next/navigation';
import { useActionState, useEffect, type PropsWithChildren } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { toast } from 'react-toastify';

import { ToolFormStateContext } from '../store/tool-state';
import FormErrors from '../../../shared/components/dashboard/errors';
import { toolAction } from '../api/create-n-update';
import type { ToolInputs } from '../models/tool-inputs';

type ToolFormComponentProps = {
  defaultValues?: ToolInputs;
  action: 'CREATE' | 'EDIT';
} & PropsWithChildren;

function ToolFormComponent({
  action,
  defaultValues,
  children,
}: ToolFormComponentProps) {
  const { id } = useParams() as { id?: string };

  const [state, formAction] = useActionState(toolAction, {
    message: undefined,
    id: id,
    action,
    defaultValues,
  });

  const locale = useLocale();
  const t = useTranslations('tools-page');

  useEffect(() => {
    if (state.message === 'success') {
      toast.success(
        t(action === 'CREATE' ? 'actions.created' : 'actions.edited'),
      );
      redirect(`/${locale}/tools`);
    }
  }, [state.message, locale, t, action]);

  return (
    <ToolFormStateContext.Provider value={state}>
      <form action={formAction} className="space-y-4">
        {children}
      </form>

      <FormErrors message={state.message} />
    </ToolFormStateContext.Provider>
  );
}

export default ToolFormComponent;
