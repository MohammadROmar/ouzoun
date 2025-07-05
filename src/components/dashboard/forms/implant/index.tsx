'use client';

import { useActionState } from 'react';
import { useTranslations } from 'next-intl';

import ImplantInfo from './info';
import ImplantDimentions from './dimentions';
import ImplantSourceAndStock from './source-stock';
import Actions from '../action';
import { implantAction, type ImplantActionState } from '@/actions/implant';
import type { ImplantInputs } from '@/models/implant';
import type { TFunction } from '@/models/t-function';

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

  const t = useTranslations('implants-page');

  return (
    <form className="space-y-4" action={formAction}>
      <ImplantInfo state={state} t={t} />
      <ImplantDimentions state={state} t={t} />
      <ImplantSourceAndStock state={state} t={t} />
      <Actions action={action} t={t} />
    </form>
  );
}

export default ImplantForm;
