'use client';

import dynamic from 'next/dynamic';

const NotificationConsetButtonAndSubmittion = dynamic(
  () => import('./notification-conset-btn-n-submittion'),
  { ssr: false },
);

export default function NotificationsAndSubmittion() {
  return <NotificationConsetButtonAndSubmittion />;
}
