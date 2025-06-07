import Image from 'next/image';
import { getLocale, getTranslations } from 'next-intl/server';
import clsx from 'clsx';

import LocaleSwitcher from '@/components/locale/locale-switcher';
import ThemeToggle from '@/components/theme/theme-toggle';
import dentalClinicImg from '@/assets/images/dental-clinic.jpg';
import SignInForm from './form';
import type { Locale } from '@/i18n/routing';

export default async function SignInPageContent() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations('sign-in-page');

  return (
    <>
      <section className="flex flex-col p-6 pt-24 md:col-span-2">
        <h1
          className={clsx(
            'text-3xl font-medium lg:text-5xl',
            locale === 'en' && 'font-ubuntu',
          )}
        >
          {t('title')}
        </h1>
        <p className="text-gray mt-2 text-sm">{t('subtitle')}</p>

        <SignInForm />

        <hr className="text-gray my-8" />

        <div className="flex items-center gap-6 self-center">
          <LocaleSwitcher />
          <ThemeToggle />
        </div>
      </section>

      <section className="relative size-full max-md:absolute max-md:inset-0 max-md:-z-10 max-md:opacity-50 max-md:blur-[2px] md:col-span-4 max-md:dark:opacity-25">
        <Image
          src={dentalClinicImg}
          alt="An image of dentist's clinic."
          fill
          sizes="(max-width: 48rem) 100vw, 66.67vw"
          priority
          className="object-cover object-center"
        />
      </section>
    </>
  );
}
