import {
  isInvalidImage,
  isInvalidText,
  isValidEmail,
  isValidPassword,
} from '@/shared/utils/validation';
import type { RegisterAssistantInputs } from '../models/register-assistant-inputs';

export function getAssistantInputsErrors(data: RegisterAssistantInputs) {
  const { userName, email, password, phoneNumber, profilePicture } = data;

  const errors: { [K in keyof RegisterAssistantInputs]?: boolean } = {
    userName: isInvalidText(userName) || /[^a-zA-Z0-9_]/.test(userName),
    email: !isValidEmail(email),
    password: !isValidPassword(password),
    phoneNumber: isInvalidText(phoneNumber)
      ? false
      : !/^09[0-9]{8}$/.test(phoneNumber),
    profilePicture: isInvalidImage(profilePicture),
  };

  return errors;
}
