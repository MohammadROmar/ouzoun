'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';

import LocaleSwitcher from '@/components/locale/locale-switcher';
import ThemeToggle from '@/components/theme/theme-toggle';
import Stepper from '@/components/stepper';
import Content from './content';

export default function ResetPasswordPageContent() {
  const [currentStep, setCurrentStep] = useState(0);

  const locale = useLocale();
  const t = useTranslations('reset-password-page');

  const steps = [t('steps.0'), t('steps.1'), t('steps.2')];

  return (
    <>
      <section className="flex justify-center md:col-span-4">
        <div className="flex flex-col p-6 max-md:w-full">
          <div className="self-center md:hidden">
            <Stepper
              direction="horizontal"
              steps={steps}
              currentStep={currentStep}
            />
          </div>

          <Content step={currentStep} setStep={setCurrentStep} />

          <hr className="text-gray my-8 w-full" />

          <Link
            href={`/${locale}/sign-in`}
            className="button mb-6 w-full rounded-full text-center"
          >
            {t('back-to-sign-in')}
          </Link>

          <div className="flex items-center gap-6 self-center">
            <LocaleSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </section>

      <section className="bg-green relative z-0 flex h-full items-center justify-center overflow-hidden bg-[url(../assets/images/pattern.png)] bg-cover bg-center bg-no-repeat text-white max-md:hidden md:col-span-2">
        <Stepper direction="vertical" steps={steps} currentStep={currentStep} />
      </section>
    </>
  );
}
