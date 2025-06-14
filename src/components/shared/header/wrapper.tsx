'use client';

import { PropsWithChildren, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

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
      transition={{ duration: 0.5, bounce: false, ease: 'easeInOut' }}
      className="bg-background/50 spacing max-container md:border-b-gray/25 fixed top-0 right-0 left-0 z-10 flex items-center justify-between py-4 backdrop-blur-sm ease-in-out md:border-b"
    >
      {children}
    </motion.header>
  );
}
