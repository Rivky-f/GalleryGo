/**
 * Status Constants
 * קבועים לסטטוסים במערכת
 */

export const CLIENT_STATUS = {
  PENDING: 1,   // ממתין לרישום
  ACTIVE: 2,    // פעיל
  INACTIVE: 3   // לא פעיל
} as const;

export const EMAIL_STATUS = {
  NOT_REGISTERED: 1,    // לא רשום במערכת
  PHOTOGRAPHER: 2,      // צלם
  CLIENT: 3,           // לקוח
  ADMIN: 4             // מנהל
} as const;

export type ClientStatus = typeof CLIENT_STATUS[keyof typeof CLIENT_STATUS];
export type EmailStatus = typeof EMAIL_STATUS[keyof typeof EMAIL_STATUS];

export const CLIENT_STATUS_NAMES = {
  1: 'ממתין לרישום',
  2: 'פעיל',
  3: 'לא פעיל'
} as const;

export const EMAIL_STATUS_NAMES = {
  1: 'לא רשום במערכת',
  2: 'צלם',
  3: 'לקוח',
  4: 'מנהל'
} as const;
