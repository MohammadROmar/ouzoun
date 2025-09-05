'use client';

import { redirect } from 'next/navigation';
import { useActionState, useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { toast } from 'react-toastify';

import Input from '@/shared/components/input';
import ChangePasswordActions from './actions';
import { changePasswordAction } from '../../api/change-password';
import FormErrors from '@/shared/components/dashboard/errors';

export default function ChangePasswordForm() {
  const [state, formAction] = useActionState(changePasswordAction, {
    message: undefined,
  });

  const locale = useLocale();
  const t = useTranslations('account-page');

  useEffect(() => {
    if (state.message === 'success') {
      toast.success(t('change-password-page.success'));
      redirect(`/${locale}/account`);
    }
  }, [state.message, t, locale]);

  return (
    <form action={formAction} className="space-y-2">
      <Input
        id="oldPassword"
        label={t('change-password-page.old-password')}
        required
        autoComplete="off"
        type="password"
        defaultValue={state.defaulValues?.oldPassword}
        error={
          state.errors?.oldPassword
            ? t('error', { field: t('password') })
            : undefined
        }
      />
      <Input
        id="newPassword"
        label={t('change-password-page.new-password')}
        required
        autoComplete="off"
        type="password"
        defaultValue={state.defaulValues?.newPassword}
        error={
          state.errors?.newPassword
            ? t('error', { field: t('password') })
            : undefined
        }
      />
      <Input
        id="confirmNewPassword"
        label={t('change-password-page.confirm-new-password')}
        required
        autoComplete="off"
        type="password"
        defaultValue={state.defaulValues?.confirmNewPassword}
        error={
          state.errors?.confirmNewPassword
            ? t('error', { field: t('password') })
            : undefined
        }
      />

      {state.message === 'passwords-not-matching' && (
        <p className="error-text">{t(state.message)}</p>
      )}

      <ChangePasswordActions t={t} />
      {state.message !== 'passwords-not-matching' && (
        <FormErrors message={state.message} />
      )}
    </form>
  );
}
