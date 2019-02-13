import dummyWords from './random.text';

export const ALPHAS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
export const DUMMY_WORDS = dummyWords.text.split(' ');
export const DUMMY_TEXT_MIN_4 = dummyWords.text
  .replace(/[^a-z\s]|\b[a-z]{1,3}\b/gi, ' ')
  .replace(/\s{2,}/g, ' ')
  .trim()
  .split(' ');
