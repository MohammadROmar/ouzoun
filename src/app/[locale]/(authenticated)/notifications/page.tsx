import { getTranslations } from 'next-intl/server';

import Title from '@/shared/components/dashboard/title';
import ErrorHandler from '@/shared/components/error-handler';
import NotificationData from '@/features/notifications/components/data';
import NoContent from '@/shared/components/no-content';
import { get } from '@/shared/api/get';
import type { NotificationData as TNotificationData } from '@/features/notifications/models/notification-data';

export default async function NotifiationsPage() {
  const t = await getTranslations('notifications-page');

  const responseData = await get<TNotificationData>(
    '/api/Notifications/CurrnetUserNotifications',
  );

  if (responseData.message !== 'success') {
    return (
      <ErrorHandler
        message={responseData.message}
        status={responseData.data.status}
      />
    );
  }

  const notificationsData = responseData.data;

  return (
    <>
      <Title title={t('title')} />

      <section className="mt-4 space-y-4">
        {notificationsData.length > 0 ? (
          <ul className="space-y-2">
            {notificationsData.map((data, i) => (
              <NotificationData key={`${data.createdAt}-${i}`} data={data} />
            ))}
          </ul>
        ) : (
          <NoContent />
        )}
      </section>
    </>
  );
}
