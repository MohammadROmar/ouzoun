import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import LocaleSwitcher from '@/components/locale/locale-switcher';
import ThemeToggle from '@/components/theme/theme-toggle';
import dentalClinicImg from '@/assets/images/dental-clinic.jpg';
import SignInForm from './form';

export default async function SignInPageContent() {
  const t = await getTranslations('sign-in-page');

  return (
    <>
      <section className="flex flex-col p-6 pt-24 md:col-span-2">
        <h1 className="ltr:font-ubuntu text-3xl font-medium lg:text-5xl">
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
          alt="A dental office featuring a patient chair and a desk, designed for dental examinations and treatments."
          fill
          sizes="(max-width: 48rem) 100vw, 66.67vw"
          priority
          className="object-cover object-center"
        />
      </section>
    </>
  );
}
