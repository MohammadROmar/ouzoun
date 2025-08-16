import { useRef, RefObject, type ComponentPropsWithoutRef } from 'react';
import { useTranslations } from 'next-intl';
import { motion, MotionProps } from 'motion/react';

import { useClose } from '@/hooks/use-close';
import { routing, type Locale } from '@/i18n/routing';

type LocaleListProps = MotionProps &
  ComponentPropsWithoutRef<'ul'> & {
    handleChange: (locale: Locale) => void;
    rootRef: RefObject<HTMLElement | null>;
    close: () => void;
  };

function LocalesList({
  rootRef,
  close,
  handleChange,
  ...props
}: LocaleListProps) {
  const ref = useRef<HTMLUListElement>(null);
  useClose({ ref, rootRef, close });

  const t = useTranslations('locales');

  return (
    <motion.ul
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 25 }}
      {...props}
    >
      {routing.locales.map((locale) => (
        <li key={locale} className="py-0.5">
          <button
            onClick={() => handleChange(locale)}
            className="w-full cursor-pointer"
          >
            {t(locale)}
          </button>
        </li>
      ))}
    </motion.ul>
  );
}

export default LocalesList;
