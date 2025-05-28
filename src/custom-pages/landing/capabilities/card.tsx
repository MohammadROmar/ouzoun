import clsx from 'clsx';

import type { Capability } from '@/data/capabilities';
import type { Locale } from '@/i18n/routing';

type CapabilityCardProps = { capability: Capability; locale: Locale };

function CapabilityCard({ capability, locale }: CapabilityCardProps) {
  const { icon: Icon, title, body } = capability;

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

export default CapabilityCard;
