'use client';

import { memo, type ComponentPropsWithoutRef } from 'react';
import { motion, MotionProps } from 'motion/react';

type HamburgerMenuIconProps = MotionProps & {
  isOpen: boolean;
} & ComponentPropsWithoutRef<'svg'>;

function HamburgerMenuIcon({ isOpen, ...props }: HamburgerMenuIconProps) {
  return (
    <motion.svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
      {...props}
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
    >
      <g
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill="currentColor"
        stroke="none"
      >
        <motion.path
          variants={{
            open: { y: [0, '-500%', '-500%'], rotate: [0, 0, -45] },
            closed: { y: ['-500%', '-500%', 0], rotate: [-45, 0, 0] },
          }}
          transition={{ duration: 0.5 }}
          d="M95 4146 c-67 -29 -105 -106 -91 -181 9 -47 59 -102 104 -115 26 -8
785 -10 2474 -8 l2437 3 27 21 c53 39 69 71 69 134 0 63 -16 95 -69 134 l-27
21 -2447 2 c-2019 2 -2452 0 -2477 -11z"
        />
        <motion.path
          variants={{
            open: { y: [0, 0, 0], rotate: [0, 0, 45] },
            closed: { y: [0, 0, 0], rotate: [45, 0, 0] },
          }}
          transition={{ duration: 0.5 }}
          d="M95 2546 c-67 -29 -105 -106 -91 -181 9 -47 59 -102 104 -115 26 -8
785 -10 2474 -8 l2437 3 27 21 c53 39 69 71 69 134 0 63 -16 95 -69 134 l-27
21 -2447 2 c-2019 2 -2452 0 -2477 -11z"
        />
        <motion.path
          variants={{
            open: { y: [0, '500%', '500%'], rotate: [0, 0, 45] },
            closed: { y: ['500%', '500%', 0], rotate: [45, 0, 0] },
          }}
          transition={{ duration: 0.5 }}
          d="M95 946 c-67 -29 -105 -106 -91 -181 9 -47 59 -102 104 -115 26 -8
785 -10 2474 -8 l2437 3 27 21 c53 39 69 71 69 134 0 63 -16 95 -69 134 l-27
21 -2447 2 c-2019 2 -2452 0 -2477 -11z"
        />
      </g>
    </motion.svg>
  );
}

export default memo(HamburgerMenuIcon);
