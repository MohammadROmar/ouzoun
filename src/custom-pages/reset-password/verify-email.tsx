import { useActionState, useEffect, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { useTranslations } from 'next-intl';
import OTPInput from 'react-otp-input';

import LoadingSpinner from '@/components/shared/loading-spinner';
import { verifyEmailAction } from '@/actions/verify-email';

type VerifyEmailProps = { changeStep(step: number): void };

export default function VerifyEmail({ changeStep }: VerifyEmailProps) {
  const [state, formAction] = useActionState(verifyEmailAction, {
    message: undefined,
  });

  const [otp, setOtp] = useState('');

  const t = useTranslations('reset-password-page');

  function handleOTPChange(otp: string) {
    setOtp(otp);
  }

  useEffect(() => {
    if (state.message === 'success') {
      changeStep(2);
    }
  }, [state.message, changeStep]);

  return (
    <form aria-live="polite" action={formAction}>
      <label htmlFor="otp-0">{t('step1.label')}</label>
      <OTPInput
        value={otp}
        onChange={handleOTPChange}
        numInputs={4}
        inputType="number"
        renderInput={(props, i) => (
          <input id={`otp-${i}`} name={`otp-${i}`} {...props} />
        )}
        containerStyle="justify-center flex gap-4 rtl:flex-row-reverse"
        inputStyle="border-gray no-spinner focus:border-green mt-2 !size-14 rounded-md border-2 text-xl outline-none focus:border-2"
      />

      <SubmitButton label={t('next')} disabled={otp.length !== 4} />
    </form>
  );
}

type SubmitButtonProps = { label: string; disabled: boolean };

function SubmitButton({ label, disabled }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={disabled || pending}
      className="button mt-6 w-full rounded-full"
    >
      {pending ? (
        <LoadingSpinner className="flex size-6 w-full animate-spin items-center" />
      ) : (
        label
      )}
    </button>
  );
}
