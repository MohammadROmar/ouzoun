export function isInvalidText(input: string) {
  return input.trim().length === 0;
}

export function isInvalidNumber(input: string) {
  return isNaN(parseInt(input)) || parseInt(input) < 0;
}
