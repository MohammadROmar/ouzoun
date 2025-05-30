'use client';

import { useActionState } from 'react';
import { useTranslations } from 'next-intl';

import Input from '@/components/ui/input';
import SignInFormSubmit from './submit';
import { signIn } from '@/utils/sign-in';

export default function SignInForm() {
  const t = useTranslations('sign-in-page');

  const [state, formAction] = useActionState(signIn, { errors: {} });

  return (
    <form className="mt-6" action={formAction}>
      <Input
        id="email"
        label={t('email')}
        type="email"
        required
        placeholder="example@email.com"
        autoComplete="email"
        error={state?.errors.email && t('errors.email')}
      />

      <Input
        id="password"
        label={t('password')}
        type="password"
        required
        placeholder="********"
        autoComplete="current-password"
        error={state?.errors.password && t('errors.password')}
        className="mt-4"
      />

      <SignInFormSubmit text={t('title')} />
    </form>
  );
}
