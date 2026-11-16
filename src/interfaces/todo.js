/**
 * @typedef {Object} Todo
 * @property {string} id
 * @property {string} text
 * @property {boolean} completed
 * @property {string} createdAt  ISO tarih
 */

export const FILTERS = [
  { key: 'all', label: 'Tümü' },
  { key: 'active', label: 'Yapılacak' },
  { key: 'completed', label: 'Tamamlanan' }
];
