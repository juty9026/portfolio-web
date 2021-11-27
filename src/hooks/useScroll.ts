import React from 'react';

const useScroll = (): { scrollX: number; scrollY: number } => {
  const [scroll, setScroll] = React.useState({ scrollX: 0, scrollY: 0 });

  const onScroll = React.useCallback(() => {
    setScroll({
      scrollX: window.scrollX,
      scrollY: window.scrollY,
    });
  }, []);

  React.useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  return scroll;
};

export default useScroll;
