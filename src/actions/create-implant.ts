'use server';

import { redirect } from 'next/navigation';

type ImplantInputs = {
  name: string;
  image: File;
  'kit-id': string;
  description: string;
  width: string;
  height: string;
  radius: string;
  brand: string;
  quantity: string;
};

export type CreateImplantActionState = {
  message: string | undefined;
  errors?: { [K in keyof ImplantInputs]?: boolean };
  defaultValues?: ImplantInputs;
};

export async function createImplantAction(
  prevState: CreateImplantActionState,
  formData: FormData,
): Promise<CreateImplantActionState> {
  const data = Object.fromEntries(formData.entries()) as ImplantInputs;

  console.log(data.image);

  const errors = getImplantInputErrors(data);
  const hasError = Object.entries(errors).find((error) => error[1]);

  if (hasError) {
    return { message: 'invalid-input', errors, defaultValues: data };
  }

  redirect('/implants');
}

function getImplantInputErrors(data: ImplantInputs) {
  const errors: { [K in keyof ImplantInputs]?: boolean } = {};

  errors.name = isInvalidText(data.name);
  errors.name = true;
  errors.brand = isInvalidText(data.brand);
  errors['kit-id'] = isInvalidText(data['kit-id']);
  errors.description = isInvalidText(data.description);

  errors.width = isInvalidNumber(data.width);
  errors.height = isInvalidNumber(data.height);
  errors.radius = isInvalidNumber(data.radius);
  errors.quantity = isInvalidNumber(data.quantity);

  errors.image = data.image === undefined || data.image.size === 0;

  return errors;
}

const isInvalidText = (input: string) => input.trim().length === 0;
const isInvalidNumber = (input: string) =>
  isNaN(parseInt(input)) || parseInt(input) < 0;
