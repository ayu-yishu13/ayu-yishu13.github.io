import { useEffect, useState } from "react";

export function useScrollAnimation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isScrolled;
}

export function useIntersectionObserver() {
  const [elements, setElements] = useState<
    Map<Element, { isVisible: boolean }>
  >(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          setElements((prev) => {
            const newMap = new Map(prev);
            newMap.set(entry.target, {
              isVisible: entry.isIntersecting,
            });
            return newMap;
          });
        }
      },
      { threshold: 0.1 }
    );

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  const observe = (element: Element | null) => {
    if (element && !elements.has(element)) {
      setElements((prev) => {
        const newMap = new Map(prev);
        newMap.set(element, { isVisible: false });
        return newMap;
      });

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            setElements((prev) => {
              const newMap = new Map(prev);
              newMap.set(entry.target, {
                isVisible: entry.isIntersecting,
              });
              return newMap;
            });
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(element);
    }
  };

  return { observe, elements };
}
