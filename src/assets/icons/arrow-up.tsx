import { memo } from 'react';

function ArrowUpIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -4.5 20 20" {...props}>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g fill="currentColor" transform="translate(-260 -6684)">
          <g transform="translate(56 160)">
            <path d="M223.708 6534.634c.39-.405.39-1.06 0-1.464l-8.264-8.563a1.95 1.95 0 0 0-2.827 0l-8.325 8.625c-.385.4-.39 1.048-.01 1.454a.976.976 0 0 0 1.425.01l7.617-7.893a.975.975 0 0 1 1.414 0l7.557 7.83a.974.974 0 0 0 1.413 0"></path>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default memo(ArrowUpIcon);
