import { useState, useRef, useEffect } from 'react';

interface Options {
  threshold?: number | number[];
  rootMargin?: string;
  /** Once the element has been in view, keep reporting `inView: true`. */
  once?: boolean;
}

const useIntersectionObserver = <T extends Element = HTMLDivElement>({ threshold = 0, rootMargin = '0px', once = false }: Options = {}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (once && !entry.isIntersecting) return;
        setInView(entry.isIntersecting);
      },
      { root: null, rootMargin, threshold }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin, threshold, once]);

  return { inView, ref };
};

export default useIntersectionObserver;
