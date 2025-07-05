export function isInvalidText(input: string) {
  return input.trim().length === 0;
}

export function isInvalidNumber(input: string) {
  return isNaN(parseInt(input)) || parseInt(input) < 0;
}

export function isInvalidImage(image: File) {
  return (
    image === undefined || image.size === 0 || image.size > 2 * 1024 * 1024
  );
}
