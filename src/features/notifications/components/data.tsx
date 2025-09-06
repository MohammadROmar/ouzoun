import { getLocale } from 'next-intl/server';

import NotificationCard from './card';
import CalenderIcon from '@/assets/icons/calender';
import type { NotificationData } from '../models/notification-data';

type NotificationDataProps = { data: NotificationData[0] };

async function NotificationData({ data }: NotificationDataProps) {
  const locale = await getLocale();

  const date = new Date(data.createdAt);
  const formattedDate = date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <h2 className="text-green ltr:font-ubuntu flex items-center gap-2 text-2xl">
        <span>
          <CalenderIcon className="size-7" />
        </span>
        <time dateTime={date.toISOString()}>{formattedDate}</time>
      </h2>

      <ul className="space-y-2">
        {data.notifications.map((notification) => (
          <NotificationCard key={notification.id} notification={notification} />
        ))}
      </ul>
    </>
  );
}

export default NotificationData;
