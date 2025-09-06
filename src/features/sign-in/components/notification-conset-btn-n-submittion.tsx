'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

import { generateToken } from '@/core/services/messaging';
import SignInFormSubmit from './submit';

export default function NotificationConsetButton() {
  const defaultState =
    typeof window !== 'undefined' ? Notification.permission : 'idle';

  const [fcmToken, setFcmToken] = useState('');
  const [status, setStatus] = useState<
    'granted' | 'denied' | 'pending' | 'idle' | 'default'
  >(defaultState);

  useEffect(() => {
    async function getToken() {
      if (Notification.permission === 'granted') {
        const token = await generateToken();

        if (token) setFcmToken(token);
      }
    }

    getToken();
  }, []);

  async function handleClick() {
    setStatus('pending');

    const token = await generateToken();

    if (token) {
      setFcmToken(token);
      setStatus('granted');
    } else {
      setStatus('denied');
    }
  }

  const t = useTranslations('sign-in-page');

  return (
    <>
      <div>
        <label htmlFor="fcm-token">
          <button
            type="button"
            onClick={handleClick}
            disabled={status === 'granted'}
            className="button disabled:bg-green/75 mt-4 w-full text-center"
          >
            {t(`notifications.${status}`)}
          </button>
        </label>

        <input
          type="hidden"
          id="fcm-token"
          name="fcm-token"
          value={fcmToken}
          className="sr-only"
          readOnly
          aria-hidden
        />
      </div>

      <SignInFormSubmit text={t('title')} disabled={status === 'pending'} />
    </>
  );
}
