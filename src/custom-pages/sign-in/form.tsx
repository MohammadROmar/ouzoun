'use client';

import { useActionState } from 'react';
import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';
import Input from '@/components/ui/input';
import Notifications from './notifications-and-submittion';
import { signInAction } from '@/actions/sign-in';
import SignInFormsErrors from './errors';

export default function SignInForm() {
  const t = useTranslations('sign-in-page');

  const [state, formAction] = useActionState(signInAction, {
    message: undefined,
    errors: {},
  });

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
        labelStyles="mt-4"
        className="mb-1"
      />
      <Link href="reset-password" className="text-gray text-sm">
        {t('forgot-password')}
      </Link>

      <Notifications />

      <SignInFormsErrors message={state.message} />
    </form>
  );
}
