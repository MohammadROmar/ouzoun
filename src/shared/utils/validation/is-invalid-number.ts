import { isInvalidText } from './is-invalid-text';

export function isInvalidNumber(input: string) {
  const number = parseInt(input);

  return isInvalidText(input) || isNaN(number) || number < 0;
}
