import { ToolInputs } from '../models/tool-inputs';
import {
  isInvalidText,
  isInvalidNumber,
  isInvalidImage,
} from '../../../shared/utils/validation';

export function getToolInputErrors(data: ToolInputs) {
  const errors: { [K in keyof ToolInputs]?: boolean } = {};

  errors.name = isInvalidText(data.name);
  errors.categoryId = isInvalidText(data.categoryId.toString());

  errors.width = isInvalidNumber(data.width);
  errors.height = isInvalidNumber(data.height);
  errors.thickness = isInvalidNumber(data.thickness);
  errors.quantity = isInvalidNumber(data.quantity);

  errors.image = isInvalidImage(data.image);

  return errors;
}
