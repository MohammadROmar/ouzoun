import { memo, type ComponentPropsWithoutRef } from 'react';

function LeaveIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.7071,3.29289 L15.4142,7 L11.7071,10.7071 C11.3166,11.0976 10.6834,11.0976 10.2929,10.7071 C9.90237,10.3166 9.90237,9.68342 10.2929,9.29289 L11.5858,8 L4.5,8 C3.67157,8 3,8.67157 3,9.5 C3,10.3284 3.67157,11 4.5,11 L6,11 C6.55228,11 7,11.4477 7,12 C7,12.5523 6.55228,13 6,13 L4.5,13 C2.567,13 1,11.433 1,9.5 C1,7.567 2.567,6 4.5,6 L11.5858,6 L10.2929,4.70711 C9.90237,4.31658 9.90237,3.68342 10.2929,3.29289 C10.6834,2.90237 11.3166,2.90237 11.7071,3.29289 Z"
      />
    </svg>
  );
}

export default memo(LeaveIcon);
