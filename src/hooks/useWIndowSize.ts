import { useEffect, useState } from 'react';

interface WindowSizeState {
  readonly width: number;
  readonly height: number;
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSizeState>({
    width: 0,
    height: 0
  });

  useEffect(() => {
    const handler = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handler);
    handler();

    return () => window.removeEventListener('resize', handler);
  }, []);

  return [windowSize.width, windowSize.height];
};

export default useWindowSize;
