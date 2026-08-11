import { useEffect, useRef } from 'react';

/**
 * Adds an "in-view" class to elements with the "reveal" class
 * when they scroll into the viewport. Returns a ref to attach
 * to the container that holds the elements to animate.
 */
export default function useReveal() {
  const containerRef = useRef(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return undefined;

    const targets = root.classList.contains('reveal')
      ? [root]
      : Array.from(root.querySelectorAll('.reveal'));

    if (targets.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return containerRef;
}
