'use server';

import { cookies } from 'next/headers';

import { isInvalidText } from './validation';
import { isValidEmail, isValidPassword } from '@/utils/validation';

type RegisterAssistantInputs = {
  userName: string;
  email: string;
  password: string;
  phoneNumber: string;
  profilePicture: File;
};

export type RegisterAssistantActionState = {
  message: string | undefined;
  errors?: { [K in keyof RegisterAssistantInputs]?: boolean };
  defaultValues?: RegisterAssistantInputs;
};

export async function registerAssistantAction(
  prevState: RegisterAssistantActionState,
  formData: FormData,
): Promise<RegisterAssistantActionState> {
  const data = Object.fromEntries(
    formData.entries(),
  ) as RegisterAssistantInputs;

  const errors = getAssistantInputsErrors(data);
  const hasError = Object.entries(errors).find((error) => error[1]);

  if (hasError) {
    return {
      message: 'invalid-input',
      errors,
      defaultValues: data,
    };
  }

  try {
    formData.append('latitude', '0');
    formData.append('longtitude', '0');
    formData.append('role', 'AssistantDoctor');
    formData.append('address', '');
    formData.append('clinicName', '');

    const accessToken = (await cookies()).get('access-token')?.value;
    const response = await fetch(`${process.env.BASE_URL}/api/users/register`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${accessToken}` },
      body: formData,
    });

    if (!response.ok) {
      return { message: 'failed-to-register', defaultValues: data, errors };
    }
  } catch (error) {
    console.log(error);

    return {
      message: 'server-connection',
      errors,
      defaultValues: data,
    };
  }

  return { message: 'success', defaultValues: data };
}

function getAssistantInputsErrors(data: RegisterAssistantInputs) {
  const errors: { [K in keyof RegisterAssistantInputs]?: boolean } = {
    userName: isInvalidText(data.userName),
    email: !isValidEmail(data.email),
    password: !isValidPassword(data.password),
    phoneNumber: isInvalidText(data.phoneNumber)
      ? false
      : !/^09[0-9]{8}$/.test(data.phoneNumber),
  };

  return errors;
}
