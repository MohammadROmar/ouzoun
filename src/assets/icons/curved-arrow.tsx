import { memo, type ComponentPropsWithoutRef } from 'react';

function CurvedArrrowIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      {...props}
    >
      <path
        d="M2 1.5L17 16.5M17 16.5V2.1M17 16.5H2.6"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default memo(CurvedArrrowIcon);
