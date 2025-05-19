import clsx from 'clsx';

import type { Service } from '@/data/services';
import type { Locale } from '@/i18n/routing';

type ServiceCardProps = { service: Service; locale: Locale };

function ServiceCard({ service, locale }: ServiceCardProps) {
  const { icon: Icon, title, body } = service;

  return (
    <li className="bg-green-light flex-1 space-y-2 rounded-xl p-4">
      <Icon className="text-green size-12" />
      <h4
        className={clsx(
          'text-green text-lg font-medium',
          locale === 'en' && 'font-ubuntu',
        )}
      >
        {title}
      </h4>
      <p className="text-background text-sm">{body}</p>
    </li>
  );
}

export default ServiceCard;
