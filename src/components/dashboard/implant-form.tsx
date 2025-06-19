'use client';

import { useActionState } from 'react';
import { useTranslations } from 'next-intl';

import ImplantInfo from './create/implant/info';
import ImplantDimentions from './create/implant/dimentions';
import ImplantSourceAndStock from './create/implant/source-stock';
import CreateImplantAction from './create/implant/action';
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
