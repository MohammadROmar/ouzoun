'use client';

import Link from 'next/link';
import { useActionState } from 'react';
import { useLocale, useTranslations } from 'next-intl';

import Input from '@/components/ui/input';
import SignInFormSubmit from './submit';
import { signIn } from '@/actions/sign-in';

export default function SignInForm() {
  const t = useTranslations('sign-in-page');
  const locale = useLocale();

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
        defaultValue={state?.email}
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
        defaultValue={state?.password}
        className="mt-4 mb-1"
      />

      <Link href={`/${locale}/reset-password`} className="text-gray text-sm">
        {t('forgot-password')}
      </Link>

      <SignInFormSubmit text={t('title')} />
    </form>
  );
}
