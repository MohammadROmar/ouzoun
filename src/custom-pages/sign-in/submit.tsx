'use client';

import { useFormStatus } from 'react-dom';

import LoadingSpinner from '@/components/shared/loading-spinner';
import { useTranslations } from 'next-intl';

type SignInFormSubmitProps = { text: string };

function SignInFormSubmit({ text }: SignInFormSubmitProps) {
  const { pending } = useFormStatus();
  const t = useTranslations('sign-in-page');

  return (
    <button
      disabled={pending}
      className="button mt-6 w-full rounded-full"
      aria-label={t('submittion')}
    >
      {pending ? (
        <LoadingSpinner className="flex size-6 w-full animate-spin items-center" />
      ) : (
        text
      )}
    </button>
  );
}

export default SignInFormSubmit;
