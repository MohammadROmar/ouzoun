'use server';

export async function signIn(
  prevState: { errors: { [key: string]: string } } | undefined,
  formData: FormData,
) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const errors: { [key: string]: string } = {};

  if (!isValidEmail(email)) {
    errors.email = 'Email is invalid';
  }

  if (!isValidPassword(password)) {
    errors.password = `${password} is invalid`;
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }
}

function isValidEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPassword(password: string) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  return passwordRegex.test(password);
}
