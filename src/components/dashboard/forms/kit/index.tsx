'use client';

import { redirect } from 'next/navigation';
import { useActionState, useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { toast } from 'react-toastify';

import Input from '@/components/ui/input';
import DropzoneImage from '../dropzone-image';
import FormActions from '../form-actions';
import { kitAction } from '@/actions/kit';
import type { KitInputs } from '@/models/kit';

type KitFormProps = { defaultValues?: KitInputs; action: 'CREATE' | 'EDIT' };

function KitForm({ defaultValues, action }: KitFormProps) {
  const [state, formAction] = useActionState(kitAction, {
    message: undefined,
    action,
    defaultValues,
  });

  const locale = useLocale();
  const t = useTranslations('kits-page');

  useEffect(() => {
    if (state.message === 'success') {
      toast.success(
        t(action === 'CREATE' ? 'actions.created' : 'actions.edited'),
      );
      redirect(`/${locale}/kits`);
    }
  }, [state.message, locale, t, action]);

  return (
    <form className="space-y-4" action={formAction}>
      <Input
        id="name"
        label={t('item.name')}
        type="text"
        required
        autoComplete="off"
        defaultValue={state.defaultValues?.name}
        error={
          state.errors?.name ? t('error', { field: t('item.name') }) : undefined
        }
      />

      <div className="m-auto aspect-square max-w-md">
        <DropzoneImage hasError={state.errors?.image} />
      </div>

      <FormActions action={action} t={t} />
    </form>
  );
}

export default KitForm;
