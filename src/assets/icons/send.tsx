import { memo, type ComponentPropsWithoutRef } from 'react';

function SendIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      {...props}
    >
      <path
        d="M22 19.8201C15.426 21.392 8.574 21.392 2 19.8201"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.05078 13.4601L16.9508 3.56006"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.4805 3.04013L15.4805 2.97007C15.7457 2.96026 16.0102 3.00535 16.2573 3.10239C16.5044 3.19943 16.7288 3.34632 16.9165 3.53403C17.1042 3.72174 17.2512 3.94612 17.3483 4.19321C17.4453 4.4403 17.4903 4.70479 17.4805 4.97007L17.4105 9.97007"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default memo(SendIcon);
