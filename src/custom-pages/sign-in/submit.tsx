'use client';

import { useFormStatus } from 'react-dom';
import { useTranslations } from 'next-intl';

import LoadingSpinner from '@/components/shared/loading-spinner';

type SignInFormSubmitProps = { text: string; disabled: boolean };

function SignInFormSubmit({ text, disabled }: SignInFormSubmitProps) {
  const { pending } = useFormStatus();
  const t = useTranslations('sign-in-page');

  return (
    <button
      disabled={pending && disabled}
      className="button mt-6 w-full"
      aria-label={t('submittion')}
    >
      {pending ? (
        <LoadingSpinner className="flex size-5 w-full animate-spin items-center" />
      ) : (
        text
      )}
    </button>
  );
}

export default SignInFormSubmit;
