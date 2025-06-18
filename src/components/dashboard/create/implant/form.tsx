'use client';

import { useActionState } from 'react';
import { useTranslations } from 'next-intl';

import ImplantInfo from './info';
import ImplantDimentions from './dimentions';
import ImplantSourceAndStock from './source-stock';
import CreateImplantAction from './action';
import { createImplantAction } from '@/actions/create-implant';

export default function CreateImplantForm() {
  const [state, formAction] = useActionState(createImplantAction, {
    message: undefined,
  });

  const t = useTranslations('implants-page');

  return (
    <form className="space-y-4" action={formAction}>
      <ImplantInfo t={t} state={state} />
      <ImplantDimentions t={t} state={state} />
      <ImplantSourceAndStock t={t} state={state} />
      <CreateImplantAction t={t} />
    </form>
  );
}
