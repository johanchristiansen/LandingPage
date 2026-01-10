import { useEffect, useRef, useState } from 'react';

type Options = IntersectionObserverInit;

export function useInView<T extends Element = Element>(options?: Options) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setInView(entry.isIntersecting);
      });
    }, options);

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current, JSON.stringify(options || {})]);

  return { ref, inView } as const;
}

export default useInView;
