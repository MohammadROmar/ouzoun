import {
  isInvalidImage,
  isInvalidNumber,
  isInvalidText,
} from '@/shared/utils/validation';
import type { ImplantInputs } from '../models/implant-inputs';

export function getImplantInputErrors(
  data: ImplantInputs,
  action: 'CREATE' | 'EDIT',
) {
  const errors: { [K in keyof ImplantInputs]?: boolean } = {};

  errors.brand = isInvalidText(data.brand);
  errors.kitId = isInvalidText(data.kitId);
  errors.description = isInvalidText(data.description);

  errors.width = isInvalidNumber(data.width);
  errors.height = isInvalidNumber(data.height);
  errors.radius = isInvalidNumber(data.radius);
  errors.quantity = isInvalidNumber(data.quantity);

  if (action === 'CREATE') {
    errors.image = isInvalidImage(data.image);
  }

  return errors;
}
