'use client';

import { useState, type PropsWithChildren } from 'react';
import { useScroll, useMotionValueEvent, motion } from 'motion/react';

export default function HeaderWrapper({ children }: PropsWithChildren) {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(true);

  useMotionValueEvent(scrollY, 'change', (latestValue) => {
    const previousValue = scrollY.getPrevious();
    const isScrollingDown = previousValue && latestValue > previousValue;

    if (isScrollingDown && latestValue > 100 && isVisible) {
      setIsVisible(false);
    } else if (!isScrollingDown && !isVisible) {
      setIsVisible(true);
    }
  });

  return (
    <motion.header
      variants={{
        hidden: { y: '-100%' },
        visible: { y: 0 },
      }}
      animate={isVisible ? 'visible' : 'hidden'}
      transition={{ duration: 0.5, bounce: 0, ease: 'easeInOut' }}
      className="bg-bg-primary border-b-gray/25 spacing max-container md:border-b-gray/25 fixed top-0 right-0 left-0 z-50 flex items-center justify-between border-b py-4 backdrop-blur-sm ease-in-out md:z-10 md:border-b"
    >
      {children}
    </motion.header>
  );
}
