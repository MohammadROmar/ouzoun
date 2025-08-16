'use client';

import { redirect } from 'next/navigation';
import { useActionState, useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { toast } from 'react-toastify';

import Input from '@/components/ui/input';
import RegisterAssistantActions from './actions';
import { registerAssistantAction } from '@/actions/assistants/register';
import FormErrors from '../errors';

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
    <form className="mt-4 space-y-4" action={formAction}>
      <Input
        id="user-name"
        label={t('user-name')}
        type="text"
        required
        autoComplete="off"
        defaultValue={defaultValues?.['user-name']}
        error={
          errors?.['user-name']
            ? t('error', { field: t('user-name') })
            : undefined
        }
      />
      <Input
        id="email"
        label={t('email')}
        type="email"
        required
        autoComplete="off"
        defaultValue={defaultValues?.email}
        error={errors?.email ? t('error', { field: t('email') }) : undefined}
      />
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
        id="phone-number"
        label={t('phone-number')}
        type="text"
        required
        autoComplete="off"
        defaultValue={defaultValues?.['phone-number']}
        error={
          errors?.['phone-number']
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
