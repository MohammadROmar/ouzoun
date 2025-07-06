'use client';

import { redirect } from 'next/navigation';
import { useActionState, useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { toast } from 'react-toastify';

import ImplantInfo from './info';
import ImplantDimentions from './dimentions';
import ImplantSourceAndStock from './source-stock';
import FormActions from '../form-actions';
import { implantAction, type ImplantActionState } from '@/actions/implant';
import type { TFunction } from '@/models/t-function';
import type { ImplantInputs } from '@/models/implant';

export type ImplantFieldsetProps = {
  state: ImplantActionState;
  t: TFunction;
};

type ImplantFormProps = {
  defaultValues?: ImplantInputs;
  action: 'CREATE' | 'EDIT';
};

function ImplantForm({ defaultValues, action }: ImplantFormProps) {
  const [state, formAction] = useActionState(implantAction, {
    message: undefined,
    defaultValues,
    action,
  });

  const locale = useLocale();
  const t = useTranslations('implants-page');

  useEffect(() => {
    if (state.message === 'success') {
      toast.success(
        t(action === 'CREATE' ? 'actions.created' : 'actions.edited'),
      );
      redirect(`/${locale}/implants`);
    }
  }, [state.message, locale, action, t]);

  return (
    <form className="space-y-4" action={formAction}>
      <ImplantInfo state={state} t={t} />
      <ImplantDimentions state={state} t={t} />
      <ImplantSourceAndStock state={state} t={t} />
      <FormActions action={action} t={t} />
    </form>
  );
}

export default ImplantForm;
