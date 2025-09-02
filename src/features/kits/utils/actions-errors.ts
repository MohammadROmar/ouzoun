import { isInvalidImage, isInvalidText } from '@/shared/utils/validation';
import type { KitInputs } from '../models/kit-inputs';

export function getKitInputErrors(data: KitInputs) {
  const errors: { [K in keyof KitInputs]?: boolean } = {};

  errors.name = isInvalidText(data.name);
  errors.image = isInvalidImage(data.image);

  return errors;
}
