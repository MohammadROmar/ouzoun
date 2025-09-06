import type { Notification } from './notification';

export type NotificationData = {
  createdAt: string;
  notifications: Notification[];
}[];
