import React, { useEffect } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import useInView from '../../hooks/useInView';

type Animation = 'fade-up' | 'fade-left' | 'fade-right' | 'zoom-in';

interface Props {
  children: React.ReactNode;
  animation?: Animation;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  className?: string;
  delay?: number; // ms
  duration?: number; // ms
}

const variantsMap: Record<Animation, Variants> = {
  'fade-up': {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  },
  'fade-left': {
    hidden: { opacity: 0, x: -24 },
    visible: { opacity: 1, x: 0 },
  },
  'fade-right': {
    hidden: { opacity: 0, x: 24 },
    visible: { opacity: 1, x: 0 },
  },
  'zoom-in': {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
};

export const MotionAnimateOnScroll: React.FC<Props> = ({
  children,
  animation = 'fade-up',
  threshold = 0.15,
  rootMargin = '0px',
  once = true,
  className = '',
  delay = 0,
  duration = 700,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView<HTMLDivElement>({ threshold, rootMargin });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [controls, inView, once]);

  const variants = variantsMap[animation];

  const MotionDiv: any = motion.div;

  return (
    <MotionDiv
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: duration / 1000, delay: delay / 1000 }}
      className={className}
    >
      {children}
    </MotionDiv>
  );
};

export default MotionAnimateOnScroll;
