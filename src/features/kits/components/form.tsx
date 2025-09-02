'use client';

import { redirect } from 'next/navigation';
import { useActionState, useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { toast } from 'react-toastify';

import Input from '@/shared/components/input';
import DropzoneImage from '../../../shared/components/dashboard/dropzone-image';
import FormActions from '../../../shared/components/dashboard/form-actions';
import FormErrors from '../../../shared/components/dashboard/errors';
import { kitAction } from '../api/create';
import type { KitInputs } from '../models/kit-inputs';

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
    <>
      <form className="space-y-4" action={formAction}>
        <Input
          id="name"
          label={t('item.name')}
          type="text"
          required
          autoComplete="off"
          defaultValue={state.defaultValues?.name}
          error={
            state.errors?.name
              ? t('error', { field: t('item.name') })
              : undefined
          }
        />

        <Input
          id="isMainKit"
          name="isMainKit"
          label={t('item.main')}
          type="checkbox"
          autoComplete="off"
          containerStyles="flex-row gap-2 items-center"
          className="accent-green !mt-0 !size-4"
          defaultChecked={
            state.defaultValues?.isMainKit === 'on' ? true : false
          }
          error={
            state.errors?.isMainKit
              ? t('error', { field: t('item.main') })
              : undefined
          }
        />

        <div className="m-auto aspect-square max-w-md">
          <DropzoneImage
            hasError={state.errors?.image}
            defaultImage={state.defaultValues?.image}
          />
        </div>

        <FormActions action={action} />
      </form>

      <FormErrors message={state.message} />
    </>
  );
}

export default KitForm;
