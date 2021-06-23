export const Breakpoints = {
  SM: '576px',
  MD: '768px',
  LG: '992px'
} as const;

export type BreakpointType = typeof Breakpoints[keyof typeof Breakpoints];

export const makeMediaQuery = (breakpoint: BreakpointType) => {
  return `@media screen and (max-width: ${breakpoint})`;
};
