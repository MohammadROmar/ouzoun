'use client';

import { useTranslations } from 'next-intl';

import { useStep } from '@/hooks/use-step';
import { Link } from '@/i18n/navigation';
import Stepper from '@/components/stepper';
import Content from './content';

export default function ResetPasswordPageContent() {
  const { step, setStep } = useStep();

  const t = useTranslations('reset-password-page');

  const STEPS = [t('steps.0'), t('steps.1'), t('steps.2')];

  return (
    <>
      <section className="flex justify-center pt-24 md:col-span-4">
        <div className="flex flex-col p-6 max-md:w-full">
          <div className="self-center md:hidden">
            <Stepper direction="horizontal" steps={STEPS} currentStep={step} />
          </div>

          <Content step={step} setStep={setStep} />

          <hr className="text-gray my-8 w-full" />

          <Link href="/sign-in" className="button mb-6 w-full text-center">
            {t('back-to-sign-in')}
          </Link>
        </div>
      </section>

      <section className="bg-green relative z-0 flex h-full items-center justify-center overflow-hidden bg-[url(../assets/images/pattern.png)] bg-cover bg-center bg-no-repeat text-white max-md:hidden md:col-span-2">
        <Stepper direction="vertical" steps={STEPS} currentStep={step} />
      </section>
    </>
  );
}
