import { memo } from 'react';

function AddIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      {...props}
    >
      <g>
        <g>
          <g>
            <line
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              x1="12"
              x2="12"
              y1="19"
              y2="5"
            />

            <line
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              x1="5"
              x2="19"
              y1="12"
              y2="12"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default memo(AddIcon);
