import React from 'react';
import MotionAnimateOnScroll from './components/MotionAnimateOnScroll';
import Staggered from './components/Staggered';

interface SectionProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'zoom-in';
  className?: string;
  stagger?: boolean;
  threshold?: number;
  delay?: number;
  duration?: number;
}

export const Section: React.FC<SectionProps> = ({
  children,
  animation = 'fade-up',
  className = '',
  stagger = false,
  threshold = 0.18,
  delay = 0,
  duration = 700,
}) => {
  const inner = <div className={className}>{children}</div>;

  return (
    <MotionAnimateOnScroll
      animation={animation}
      threshold={threshold}
      delay={delay}
      duration={duration}
      once
    >
      {stagger ? <Staggered>{inner}</Staggered> : inner}
    </MotionAnimateOnScroll>
  );
};

export default Section;
