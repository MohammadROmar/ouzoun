let messaging: import('firebase/messaging').Messaging | null = null;

export async function getMessagingInstance() {
  if (typeof window === 'undefined') return null;

  if (!messaging) {
    const { getMessaging } = await import('firebase/messaging');
    const { firebaseApp } = await import('./firebase');
    messaging = getMessaging(firebaseApp);
  }

  return messaging;
}

export async function generateToken() {
  if (typeof window === 'undefined') return null;

  const permission = await Notification.requestPermission();
  if (permission !== 'granted') {
    console.warn('Notification permission denied');
    return null;
  }

  const messaging = await getMessagingInstance();

  if (!messaging) return null;

  const { getToken } = await import('firebase/messaging');
  const token = await getToken(messaging, {
    vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
  });

  return token;
}
