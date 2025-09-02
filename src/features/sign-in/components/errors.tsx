'use client';

import { useTranslations } from 'next-intl';

type SignInFormsErrorsProps = { message?: string };

function SignInFormsErrors({ message }: SignInFormsErrorsProps) {
  const t = useTranslations('sign-in-page.errors');

  if (
    message === undefined ||
    message === 'success' ||
    message === 'invalid-input'
  ) {
    return null;
  }

  const errorMessage =
    message === 'invalid-role'
      ? t('not-admin')
      : message === 'error'
        ? t('wrong-creds')
        : t('unknown');

  return (
    <p className="text-danger mt-2 text-sm whitespace-pre-wrap">
      {errorMessage}
    </p>
  );
}

export default SignInFormsErrors;
