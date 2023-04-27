import { useRef, useEffect } from "react";

export default function useInView(callback: () => void) {
  const observeRef = useRef(null);

  useEffect(() => {
    if (!observeRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          callback();
        }
      },
      {
        root: null,
        rootMargin: "25px",
        threshold: 0,
      }
    );
    observer.observe(observeRef.current);

    return () => observer.disconnect();
  }, [callback]);

  return { observeRef };
}
