import { memo, type ComponentPropsWithoutRef } from 'react';

function CheckMarkIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 50 50"
      enableBackground="new 0 0 50 50"
      xmlSpace="preserve"
      aria-hidden
      {...props}
    >
      <path
        stroke="currentColor"
        strokeWidth={2}
        d="M40.267,14.628L20.974,33.921l-9.293-9.293c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l10,10
	c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l20-20c0.391-0.391,0.391-1.023,0-1.414S40.657,14.237,40.267,14.628z
	"
      />
    </svg>
  );
}

export default memo(CheckMarkIcon);
