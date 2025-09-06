import { getLocale } from 'next-intl/server';

import HourIcon from '@/assets/icons/hour';
import type { Notification } from '../models/notification';

type NotificationCardProps = { notification: Notification };

async function NotificationCard({ notification }: NotificationCardProps) {
  const locale = await getLocale();
  const date = new Date(notification.createdAt);

  const formattedDate = date.toLocaleTimeString(locale, {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <li className="card-shadow bg-bg-primary flex items-start justify-between gap-4 rounded-xl p-2 md:p-3">
      <div>
        <h3 className="ltr:font-ubuntu text-xl">{notification.title}</h3>
        <p className="text-gray mt-1 text-sm">{notification.body}</p>
      </div>

      <div className="text-gray flex items-center gap-1 text-sm">
        <HourIcon className="size-4" />
        <time dateTime={date.toISOString()}>{formattedDate}</time>
      </div>
    </li>
  );
}

export default NotificationCard;
