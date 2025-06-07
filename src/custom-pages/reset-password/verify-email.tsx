import { useState } from 'react';
import { useTranslations } from 'next-intl';
import OTPInput from 'react-otp-input';

type VerifyEmailProps = { changeStep(step: number): void };

export default function VerifyEmail({ changeStep }: VerifyEmailProps) {
  const [otp, setOtp] = useState('');

  const t = useTranslations('reset-password-page');

  function handleOTPChange(otp: string) {
    setOtp(otp);
  }

  function handleSubmit() {
    if (otp.length === 4) {
      changeStep(2);
    }
  }

  return (
    <form aria-live="polite" onSubmit={handleSubmit}>
      <label htmlFor="otp-0">{t('step1.label')}</label>
      <OTPInput
        value={otp}
        onChange={handleOTPChange}
        numInputs={4}
        inputType="number"
        renderInput={(props, i) => <input id={`otp-${i}`} {...props} />}
        containerStyle="justify-center flex gap-4 rtl:flex-row-reverse"
        inputStyle="border-gray no-spinner focus:border-green mt-2 !size-14 rounded-md border-2 text-xl outline-none focus:border-2"
      />

      <button
        disabled={otp.length !== 4}
        className="button mt-6 w-full rounded-full"
      >
        {t('next')}
      </button>
    </form>
  );
}
