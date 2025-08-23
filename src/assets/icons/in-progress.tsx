import { memo, type ComponentPropsWithoutRef } from 'react';

function InProgressIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 32 32"
      aria-hidden
      {...props}
    >
      <path d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2m0 26a12 12 0 0 1 0-24v12l8.481 8.481A11.96 11.96 0 0 1 16 28"></path>
      <path fill="none" d="M0 0h32v32H0z"></path>
    </svg>
  );
}

export default memo(InProgressIcon);
