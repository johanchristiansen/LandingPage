import React from 'react';
import useInView from '../../hooks/useInView';

type Animation = 'fade-up' | 'fade-left' | 'fade-right' | 'zoom-in';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation?: Animation;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  className?: string;
  delay?: number; // ms
  duration?: number; // ms
}

export const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  animation = 'fade-up',
  threshold = 0.15,
  rootMargin = '0px',
  once = true,
  className = '',
  delay = 0,
  duration = 700
}) => {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold, rootMargin });

  const style: React.CSSProperties = {
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`
  };

  const base = 'will-change-transform transition-opacity transition-transform';

  const initial =
    animation === 'fade-up'
      ? 'opacity-0 translate-y-6'
      : animation === 'fade-left'
      ? 'opacity-0 -translate-x-6'
      : animation === 'fade-right'
      ? 'opacity-0 translate-x-6'
      : 'opacity-0 scale-95';

  const visible = 'opacity-100 translate-y-0 translate-x-0 scale-100';

  const show = inView ? visible : initial;

  // if `once` is true and element already in view, keep it visible
  // simple behavior: when inView becomes true, it stays true

  return (
    <div ref={ref} style={style} className={`${base} ${show} ${className}`}>
      {children}
    </div>
  );
};

export default AnimateOnScroll;
