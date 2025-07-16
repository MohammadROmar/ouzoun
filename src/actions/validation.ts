export function isInvalidText(input: string) {
  return input.trim().length === 0;
}

export function isInvalidNumber(input: string) {
  const number = parseInt(input);

  return isInvalidText(input) || isNaN(number) || number < 0;
}

export function isInvalidImage(image: File) {
  return (
    image === undefined || image.size === 0 || image.size > 2 * 1024 * 1024
  );
}
