'use client';

import { redirect } from 'next/navigation';
import { useActionState, useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { toast } from 'react-toastify';

import ToolInfo from './info';
import ToolDimensions from './dimensions';
import ToolStock from './stock';
import Actions from '../../actions';
import { toolAction, type ToolActionState } from '@/actions/tool';
import type { TFunction } from '@/models/t-function';
import type { ToolInputs } from '@/models/tool';

export type ToolFieldsetProps = { state: ToolActionState; t: TFunction };

type ToolFormProps = { defaultValues?: ToolInputs; action: 'CREATE' | 'EDIT' };

export default function ToolForm({ action, defaultValues }: ToolFormProps) {
  const [state, formAction] = useActionState(toolAction, {
    message: undefined,
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
    <form action={formAction} className="space-y-4">
      <ToolInfo state={state} t={t} />
      <ToolDimensions state={state} t={t} />
      <ToolStock state={state} t={t} />
      <Actions action={action} t={t} />
    </form>
  );
}
