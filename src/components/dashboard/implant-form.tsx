'use client';

import { useActionState } from 'react';
import { useTranslations } from 'next-intl';

import ImplantInfo from './forms/implant/info';
import ImplantDimentions from './forms/implant/dimentions';
import ImplantSourceAndStock from './forms/implant/source-stock';
import CreateImplantAction from './forms/implant/action';
import { implantAction } from '@/actions/implant';
import type { ImplantInputs } from '@/models/implant';

type ImplantForm = { defaultValues?: ImplantInputs; action: 'CREATE' | 'EDIT' };

export default function ImplantForm({ defaultValues, action }: ImplantForm) {
  const [state, formAction] = useActionState(implantAction, {
    message: undefined,
    defaultValues,
    action,
  });

  const t = useTranslations('implants-page');

  return (
    <form className="space-y-4" action={formAction}>
      <ImplantInfo t={t} state={state} />
      <ImplantDimentions t={t} state={state} />
      <ImplantSourceAndStock t={t} state={state} />
      <CreateImplantAction t={t} action={action} />
    </form>
  );
}
