'use server';

import { cookies } from 'next/headers';

import { isInvalidText } from '../validation';
import { isValidEmail, isValidPassword } from '@/utils/validation';

type RegisterAssistantInputs = {
  'user-name': string;
  email: string;
  password: string;
  'phone-number': string;
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
    const accessToken = (await cookies()).get('access-token')?.value;
    const response = await fetch(`${process.env.BASE_URL}/api/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        userName: data['user-name'],
        email: data.email,
        password: data.password,
        phoneNumber: data['phone-number'],
        latitude: 0,
        longtitude: 0,
        role: 'AssistantDoctor',
        address: '',
        clinicName: '',
      }),
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
    'user-name': isInvalidText(data['user-name']),
    email: !isValidEmail(data.email),
    password: !isValidPassword(data.password),
    'phone-number': isInvalidText(data['phone-number'])
      ? false
      : !/^09[0-9]{8}$/.test(data['phone-number']),
  };

  return errors;
}
