"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import styles from "./AnimateOnScroll.module.css";

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: "fadeUp" | "fadeIn" | "slideRight" | "slideLeft";
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimateOnScroll({
  children,
  animation = "fadeUp",
  delay = 0,
  duration = 0.8,
  threshold = 0.15,
  once = true,
  className = "",
  style = {},
}: AnimateOnScrollProps) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            // Once it's in view, we can unobserve if 'once' is true to save memory
            if (once && ref.current) {
              observer.unobserve(ref.current);
            }
          } else if (!once) {
            setInView(false);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [threshold, once]);

  return (
    <div
      ref={ref}
      className={`${styles.base} ${styles[animation]} ${inView ? styles.inView : ""} ${className}`}
      style={{
        ...style,
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
