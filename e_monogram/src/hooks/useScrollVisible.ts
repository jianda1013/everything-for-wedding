import { useEffect, useRef, useState } from "react";

interface UseScrollVisibleOptions {
  /** How much of the element must be visible before triggering (0–1). Default: 0.5 */
  threshold?: number;
  /**
   * If true, `visible` resets to false when the element leaves the viewport
   * so the animation replays every time it scrolls back into view.
   * If false (default), the animation plays once and stays.
   */
  repeat?: boolean;
  /**
   * Expands the observer's detection zone as a fraction of the element's own height.
   * e.g. 0.1 makes the zone 1.1× the element — the animation fires slightly before
   * the element fully enters the viewport. Default: 0.1
   */
  expansion?: number;
}

/**
 * Returns a [ref, visible] tuple.
 * Attach `ref` to the element you want to watch.
 * By default, `visible` becomes true on first scroll into view and stays true.
 * Pass `repeat: true` to replay the animation every time the element re-enters the viewport.
 * Pass `expansion` to grow the detection zone beyond the element's own bounds.
 */
function useScrollVisible<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollVisibleOptions = {},
): [React.RefObject<T>, boolean] {
  const { threshold = 0.5, repeat = true, expansion = 3 } = options;
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Compute rootMargin from the element's own height so the trigger zone
    // is `expansion` times larger than the component itself.
    const margin = Math.round(el.getBoundingClientRect().height * expansion);
    const rootMargin = `${margin}px 0px`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (repeat) {
            // Reset then re-trigger so CSS animations restart on each scroll-in
            setVisible(false);
            requestAnimationFrame(() => {
              requestAnimationFrame(() => setVisible(true));
            });
          } else {
            setVisible(true);
            observer.disconnect(); // animate once, then stop watching
          }
        } else if (repeat) {
          setVisible(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, repeat, expansion]);

  return [ref, visible];
}

export default useScrollVisible;
