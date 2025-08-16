importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js',
);

const firebaseConfig = {
  apiKey: 'AIzaSyDoj_maOqmP7T19bMj6_mzhFvHcqZHhBAw',
  authDomain: 'ouzon-2ce7d.firebaseapp.com',
  projectId: 'ouzon-2ce7d',
  storageBucket: 'ouzon-2ce7d.firebasestorage.app',
  messagingSenderId: '562754871888',
  appId: '1:562754871888:web:81f355cc93ba2d4d3c6755',
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: './logo.png',
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
