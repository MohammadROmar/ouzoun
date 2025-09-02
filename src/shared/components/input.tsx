import clsx from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';

type BaseProps = {
  id: string;
  label: string;
  error?: string;
  labelStyles?: string;
  containerStyles?: string;
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

function Input({
  id,
  as = 'input',
  label,
  error,
  labelStyles,
  containerStyles,
  ...props
}: Props) {
  const className = clsx(
    'border-gray mt-2 w-full rounded-[inherit] border px-4 py-2 focus:outline focus:outline-black dark:focus:outline-white',
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
    <div className={clsx('flex flex-col rounded-xl', containerStyles)}>
      <label htmlFor={id} className={labelStyles}>
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
