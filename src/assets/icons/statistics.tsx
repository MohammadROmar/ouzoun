import { memo, type ComponentPropsWithoutRef } from 'react';

function StatisticsIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      {...props}
    >
      <path d="M521.58 516.763v-472.816c250.725 22.642 450.175 222.092 472.817 472.817h-472.816zM918.229 593.091h-435.436c-21.963 0-39.769-17.805-39.769-39.769 0 0 0 0 0 0v-435.463c-222.914 20.121-397.682 207.273-397.682 435.436 0 241.605 195.898 437.452 437.451 437.451 228.163 0 415.339-174.715 435.436-397.657z" />
    </svg>
  );
}

export default memo(StatisticsIcon);
