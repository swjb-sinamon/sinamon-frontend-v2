import { useMemo } from 'react';
import useWindowSize from './useWIndowSize';
import { Breakpoints } from '../styles/Breakpoint';

const useDesktop = () => {
  const [width] = useWindowSize();
  return useMemo(() => width > Number(Breakpoints.MD.replace('px', '')), [width]);
};

export default useDesktop;
