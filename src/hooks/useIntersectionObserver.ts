import React from 'react';

interface Props {
  ref: React.RefObject<null>;
  options?: IntersectionObserverInit;
}

const useIntersectionObserver = ({
  ref,
  options = { root: undefined, rootMargin: '0px', threshold: 0 },
}: Props): IntersectionObserverEntry | null => {
  const [onIntersectEntry, setOnIntersectEntry] = React.useState<IntersectionObserverEntry | null>(null);

  const onIntersect: IntersectionObserverCallback = React.useCallback(
    ([entry]): void => {
      setOnIntersectEntry(entry);
    },
    [setOnIntersectEntry]
  );

  React.useEffect(() => {
    if (!ref.current) {
      return;
    }

    const observer: IntersectionObserver = new IntersectionObserver(onIntersect, options);
    observer.observe(ref.current);

    return () => {
      if (!ref?.current) {
        return;
      }
      observer.unobserve(ref.current);
    };
  }, [ref, options]);

  return onIntersectEntry;
};

export default useIntersectionObserver;
