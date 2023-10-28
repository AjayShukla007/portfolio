import { useEffect, useRef, useState } from 'react';
import { useMotionValue } from 'framer-motion';

export default function useElementScrollVelocity(ref) {
  const lastScrollTop = useRef(0);
  const velocity = useMotionValue(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = ref.current.scrollTop;
      const delta = scrollTop - lastScrollTop.current;
      lastScrollTop.current = scrollTop;
      velocity.set(delta);
    };

    const element = ref.current;
    if (element) {
      element.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (element) {
        element.removeEventListener('scroll', handleScroll);
      }
    };
  }, [ref, velocity]);

  return velocity;
}
