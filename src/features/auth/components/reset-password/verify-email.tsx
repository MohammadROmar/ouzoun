import { useActionState, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import OTPInput from 'react-otp-input';

import ResetPasswordAction from './action';
import FormErrors from '@/shared/components/dashboard/errors';
import { verifyEmailAction } from '../../api/verify-email';

type VerifyEmailProps = { changeStep(step: number): void };

export default function VerifyEmail({ changeStep }: VerifyEmailProps) {
  const [{ message }, formAction, pending] = useActionState(verifyEmailAction, {
    message: undefined,
  });

  const [otp, setOtp] = useState('');

  const t = useTranslations('reset-password-page');

  function handleOTPChange(otp: string) {
    setOtp(otp);
  }

  useEffect(() => {
    if (message === 'success') {
      changeStep(2);
    }
  }, [message, changeStep]);

  return (
    <form aria-live="polite" action={formAction}>
      <label htmlFor="otp-0">{t('step1.label')}</label>
      <OTPInput
        value={otp}
        onChange={handleOTPChange}
        numInputs={6}
        inputType="number"
        renderInput={(props, i) => (
          <input id={`otp-${i}`} name={`otp-${i}`} {...props} />
        )}
        containerStyle="justify-center flex gap-4 rtl:flex-row-reverse"
        inputStyle="border-gray no-spinner focus:border-green mt-2 aspect-square !w-full max-w-14 rounded-md border-2 text-xl outline-none focus:border-2"
      />

      {message === 'invalid-input' && (
        <p className="error-text">{t('error', { field: t('step1.label') })}</p>
      )}

      <ResetPasswordAction
        label={t('next')}
        disabled={otp.length !== 6 || pending}
      />

      {message === 'failed-to-submit' ? (
        <p className="error-text">{t('error', { field: t('step1.label') })}</p>
      ) : (
        <FormErrors message={message} />
      )}
    </form>
  );
}
