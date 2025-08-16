'use client';

import { redirect, useParams } from 'next/navigation';
import { useActionState, useEffect, type PropsWithChildren } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { toast } from 'react-toastify';

import FormErrors from '../errors';
import { ImplantFormStateContext } from '@/store/implant-state';
import { implantAction } from '@/actions/implant';
import type { ImplantInputs } from '@/models/implant';

type ImplantFormComponentProps = {
  defaultValues?: ImplantInputs;
  action: 'CREATE' | 'EDIT';
} & PropsWithChildren;

function ImplantFormComponent({
  defaultValues,
  action,
  children,
}: ImplantFormComponentProps) {
  const locale = useLocale();
  const t = useTranslations('implants-page');
  const { id } = useParams() as { id?: string };

  const [state, formAction] = useActionState(implantAction, {
    id,
    action,
    defaultValues,
    message: undefined,
  });

  useEffect(() => {
    if (state.message === 'success') {
      toast.success(
        t(action === 'CREATE' ? 'actions.created' : 'actions.edited'),
      );
      redirect(`/${locale}/implants`);
    }
  }, [state.message, locale, action, t]);

  return (
    <ImplantFormStateContext.Provider value={state}>
      <form className="space-y-4" action={formAction}>
        {children}
      </form>

      <FormErrors message={state.message} />
    </ImplantFormStateContext.Provider>
  );
}

export default ImplantFormComponent;
