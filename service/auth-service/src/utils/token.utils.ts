/**
 * Token Utilities
 * כלים ליצירת טוקנים ייחודיים
 */

import { randomBytes } from 'crypto';

/**
 * יוצר טוקן ייחודי לגלריה
 * @returns string - טוקן באורך 32 תווים
 */
export function generateGalleryToken(): string {
  return randomBytes(16).toString('hex');
}

/**
 * יוצר טוקן הזמנה ללקוח
 * @returns string - טוקן באורך 24 תווים
 */
export function generateInviteToken(): string {
  return randomBytes(12).toString('hex');
}

/**
 * יוצר סיסמה זמנית
 * @returns string - סיסמה באורך 8 תווים
 */
export function generateTempPassword(): string {
  return Math.random().toString(36).slice(-8);
}