import type { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';

type BaseProps = {
  id: string;
  label: string;
  error?: string;
};

type InputProps = {
  as?: 'input';
} & BaseProps &
  ComponentPropsWithoutRef<'input'>;

type TextareaProps = {
  as: 'textarea';
} & BaseProps &
  ComponentPropsWithoutRef<'textarea'>;

type Props = InputProps | TextareaProps;

function Input({ id, as = 'input', label, error, ...props }: Props) {
  const className = clsx(
    'border-gray w-full rounded-[inherit] border px-4 py-2 outline-none',
    props.className,
  );

  const sharedProps = {
    id,
    name: id,
    'aria-invalid': !!error,
    'aria-describedby': error ? `error-${id}` : undefined,
    className,
  };

  let element = <input {...(props as InputProps)} {...sharedProps} />;

  if (as === 'textarea') {
    element = <textarea {...(props as TextareaProps)} {...sharedProps} />;
  }

  return (
    <div className="flex flex-col rounded-full">
      <label htmlFor={id} className="mb-2">
        {label}
      </label>
      {element}

      {error && (
        <p
          id={`error-${id}`}
          className="mt-1 text-sm text-red-400"
          aria-live="polite"
        >
          {error}
        </p>
      )}
    </div>
  );
}

export default Input;
