'use client';

import { redirect } from 'next/navigation';
import { useActionState, useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { toast } from 'react-toastify';

import Input from '@/shared/components/input';
import FormActions from './register/actions';
import FormErrors from '@/shared/components/dashboard/errors';
import { recoverAssistantAction } from '../api/recover';

type RecoverAssistantFormProps = { assistantId: string };

function RecoverAssistantForm({ assistantId }: RecoverAssistantFormProps) {
  const [{ message, errors, defaultValues }, formAction] = useActionState(
    recoverAssistantAction,
    {
      id: assistantId,
      message: undefined,
    },
  );

  const locale = useLocale();
  const t = useTranslations('assistants-page.all.recover');

  useEffect(() => {
    if (message === 'success') {
      toast.success(t('success'));
      redirect(`/${locale}/assistants/all`);
    }
  }, [message, t, locale]);

  return (
    <form action={formAction} className="space-y-4">
      <Input
        id="password"
        label={t('password')}
        type="password"
        required
        autoComplete="off"
        defaultValue={defaultValues?.password}
        error={
          errors?.password ? t('error', { field: t('password') }) : undefined
        }
      />
      <Input
        id="confirm-password"
        label={t('confirm-password')}
        type="password"
        required
        autoComplete="off"
        defaultValue={defaultValues?.confirmPassword}
        error={
          errors?.confirmPassword
            ? t('error', { field: t('password') })
            : undefined
        }
      />
      {message === 'invalid-input' &&
        !errors?.password &&
        !errors?.confirmPassword && (
          <p className="error-text">{t('password-mismatch')}</p>
        )}

      <FormErrors message={message} />

      <FormActions t={t} />
    </form>
  );
}

export default RecoverAssistantForm;
