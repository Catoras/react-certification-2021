import { useEffect, useRef } from 'react';

const useDebounce = (handler, dependency = [], time = 300) => {
  const timer = useRef(null);
  useEffect(() => {
    if (timer.current !== null) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      handler();
    }, time);
    return () => {
      clearTimeout(timer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependency);
};

export default useDebounce;
