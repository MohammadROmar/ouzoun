export function isInvalidImage(image: File) {
  return (
    image === undefined || image.size === 0 || image.size > 2 * 1024 * 1024
  );
}
