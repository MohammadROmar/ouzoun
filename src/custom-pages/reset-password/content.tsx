import { useTranslations } from 'next-intl';

import Email from './email';
import VerifyEmail from './verify-email';
import ResetPassword from './reset-password';

type ContentProps = {
  step: number;
  setStep(newStep: number): void;
};

export default function Content({ step, setStep }: ContentProps) {
  const t = useTranslations('reset-password-page');

  return (
    <>
      <h1
        aria-live="polite"
        className="ltr:font-ubuntu mt-8 text-3xl font-medium lg:text-5xl"
      >
        {t(`step${step}.title`)}
      </h1>
      <p aria-live="polite" className="text-gray mt-2 mb-4 text-sm">
        {t(`step${step}.subtitle`)}
      </p>

      {step === 0 && <Email changeStep={setStep} />}
      {step === 1 && <VerifyEmail changeStep={setStep} />}
      {step === 2 && <ResetPassword changeStep={setStep} />}
      {step > 2 && (
        <p aria-live="polite" className="">
          {t('step3.sign-in')}
        </p>
      )}
    </>
  );
}
