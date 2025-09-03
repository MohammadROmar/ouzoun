'use client';

import { redirect } from 'next/navigation';
import { useActionState, useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { toast } from 'react-toastify';

import Input from '@/shared/components/input';
import RegisterAssistantActions from './actions';
import FormErrors from '@/shared/components/dashboard/errors';
import DropzoneImage from '@/shared/components/dashboard/dropzone-image';
import { registerAssistantAction } from '../../api/register-assistant';

function RegisterAssistantForm() {
  const [{ message, defaultValues, errors }, formAction] = useActionState(
    registerAssistantAction,
    {
      message: undefined,
    },
  );

  const locale = useLocale();
  const t = useTranslations('assistants-page.register');

  useEffect(() => {
    if (message === 'success') {
      toast.success(t('success'));
      redirect(`/${locale}/assistants`);
    }
  }, [locale, message, t]);

  return (
    <form className="space-y-4" action={formAction}>
      <div className="grid grid-cols-1 gap-4 space-y-2 md:grid-cols-2">
        <div className="space-y-2">
          <Input
            id="userName"
            label={t('user-name')}
            type="text"
            // required
            autoComplete="off"
            defaultValue={defaultValues?.userName}
            error={errors?.userName ? t('user-name-error') : undefined}
          />
          <Input
            id="email"
            label={t('email')}
            type="email"
            required
            autoComplete="off"
            defaultValue={defaultValues?.email}
            error={
              errors?.email ? t('error', { field: t('email') }) : undefined
            }
          />
        </div>

        <DropzoneImage
          id="profilePicture"
          hasError={errors?.profilePicture}
          defaultImage={defaultValues?.profilePicture}
        />
      </div>
      <Input
        id="password"
        label={t('password')}
        type="password"
        required
        autoComplete="new-password"
        defaultValue={defaultValues?.password}
        error={
          errors?.password ? t('error', { field: t('password') }) : undefined
        }
      />
      <Input
        id="phoneNumber"
        label={t('phone-number')}
        type="text"
        required
        autoComplete="off"
        defaultValue={defaultValues?.phoneNumber}
        error={
          errors?.phoneNumber
            ? t('error', { field: t('phone-number') })
            : undefined
        }
      />

      <RegisterAssistantActions t={t} />

      <FormErrors message={message} />
    </form>
  );
}

export default RegisterAssistantForm;
