import { getTranslations } from 'next-intl/server';

import Logo from './logo';
import Navigation from '../navigation';
import { landingNavigation } from '@/data/navigation/landing';

export default async function Footer() {
  const t = await getTranslations();

  const navigationLinks = await landingNavigation();

  return (
    <footer className="spacing max-container border-gray flex flex-col border-t py-6">
      <div className="flex items-center gap-4">
        <Logo />
      </div>
      <p className="text-gray mt-2 max-w-lg text-sm">
        {t('metadata.root.description')}
      </p>

      <Navigation links={navigationLinks} className="mt-4" />

      <p className="mt-4 self-center text-sm">
        <span>&copy; </span>
        <span className="text-green dark:text-green-light">
          {t('metadata.root.title')}
        </span>
        <span>{`. ${t('footer.rights')}`}</span>
      </p>
    </footer>
  );
}
