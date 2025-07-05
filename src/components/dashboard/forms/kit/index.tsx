'use client';

import { useActionState } from 'react';
import { useTranslations } from 'next-intl';

import Input from '@/components/ui/input';
import DropzoneImage from '../dropzone-image';
import Actions from '../action';
import { kitAction } from '@/actions/kit';
import type { KitInputs } from '@/models/kit';

type KitFormProps = { defaultValues?: KitInputs; action: 'CREATE' | 'EDIT' };

function KitForm({ defaultValues, action }: KitFormProps) {
  const [state, formAction] = useActionState(kitAction, {
    message: undefined,
    action,
    defaultValues,
  });

  const t = useTranslations('kits-page');

  return (
    <form className="space-y-4" action={formAction}>
      <Input
        id="name"
        label={t('item.name')}
        type="text"
        required
        autoComplete="off"
        className="rounded-lg"
        defaultValue={state.defaultValues?.name}
        error={
          state.errors?.name ? t('error', { field: t('item.name') }) : undefined
        }
      />

      <div className="m-auto aspect-square max-w-md">
        <DropzoneImage hasError={state.errors?.image} />
      </div>

      <Actions action={action} t={t} />
    </form>
  );
}

export default KitForm;
