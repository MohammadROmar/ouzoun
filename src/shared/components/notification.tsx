'use client';

import { useEffect } from 'react';
import { onMessage } from 'firebase/messaging';
import { toast } from 'react-toastify';

import { getMessagingInstance } from '@/core/services/messaging';

export default function Notifications() {
  useEffect(() => {
    async function handleNotifications() {
      const messaging = await getMessagingInstance();
      if (!messaging) return;

      try {
        onMessage(messaging, (payload) => {
          if (payload.notification) {
            toast.info(
              <div className="space-y-1">
                <p className="ltr:font-ubuntu text-lg">
                  {payload.notification?.title}
                </p>
                <p className="text-gray text-sm">
                  {payload.notification?.body}
                </p>
              </div>,
            );
          }
        });
      } catch (err) {
        console.error('Error getting token', err);
      }
    }

    handleNotifications();
  }, []);

  return null;
}
