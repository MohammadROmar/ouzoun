import clsx from 'clsx';

import CheckMarkIcon from '@/assets/icons/check-mark';
import type { Locale } from '@/i18n/routing';

type FeatureProps = {
  title: string;
  body: string;
  locale: Locale;
};

function Feature({ title, body, locale }: FeatureProps) {
  return (
    <li className="flex items-start gap-4">
      <div
        aria-hidden
        className="text-background bg-green dark:bg-green-light mt-2 box-content rounded-full p-0.5"
      >
        <CheckMarkIcon className="aspect-square size-3" />
      </div>

      <div>
        <h3
          className={clsx(
            'inline font-medium',
            locale === 'en' && 'font-ubuntu',
          )}
        >
          {title}
          <span className="text-green-light">: </span>
        </h3>
        <p className="text-gray inline text-sm">{body}</p>
      </div>
    </li>
  );
}

export default Feature;
