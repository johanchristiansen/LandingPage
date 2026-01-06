import React from 'react';
import useInView from '../../hooks/useInView';

interface StaggeredProps {
  children: React.ReactNode[] | React.ReactNode;
  className?: string;
  delay?: number; // ms between items
  threshold?: number;
}

export const Staggered: React.FC<StaggeredProps> = ({ children, className = '', delay = 100, threshold = 0.15 }) => {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold });

  const items = React.Children.toArray(children);

  return (
    <div ref={ref} className={`${className}`}> 
      {items.map((child, i) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<any>, ({
              style: {
                transitionProperty: 'opacity, transform',
                transitionDuration: '500ms',
                transitionTimingFunction: 'cubic-bezier(.2,.9,.2,1)',
                transitionDelay: `${inView ? i * delay : 0}ms`,
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : 'translateY(12px)'
              }
            } as any))
          : child
      )}
    </div>
  );
};

export default Staggered;
