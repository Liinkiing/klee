import { useMatchMedia } from '@liinkiing/react-hooks'

import { breakpoints, KleeBreakpoint } from '../styles/theme'

const isKleeBreakpoint = (breakpoint: KleeBreakpoint | string): breakpoint is KleeBreakpoint => {
  return Object.keys(breakpoints).includes(breakpoint as string)
}

export const useBreakpoint = (breakpoint: KleeBreakpoint | string): boolean => {
  const value = isKleeBreakpoint(breakpoint) ? `screen and (max-width: ${breakpoints[breakpoint]})` : breakpoint

  return useMatchMedia(value)
}

export const useIsMobile = (): boolean => useBreakpoint(KleeBreakpoint.Tablet)
export const useIsTablet = (): boolean => useBreakpoint(KleeBreakpoint.Desktop)
export const useIsDesktop = (): boolean => useBreakpoint(KleeBreakpoint.Wide)
export const useIsWide = (): boolean => useBreakpoint(KleeBreakpoint.UltraWide)
