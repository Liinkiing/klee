import { keyframes } from '@emotion/react'
import type { Keyframes } from '@emotion/serialize'

export const blink: Keyframes = keyframes`
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
`

export const slideInUp: Keyframes = keyframes`
  from {
    transform: translateY(-10%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`
export const slideInDown: Keyframes = keyframes`
  from {
    transform: translateY(10%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

export const slideInRightToLeft: Keyframes = keyframes`
  from {
    transform: translateX(-10%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`
export const slideInLeftToRight: Keyframes = keyframes`
  from {
    transform: translateX(10%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

export const fade: Keyframes = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const fadeOut: Keyframes = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

export const scaleUp: Keyframes = keyframes`
  from {
    transform: scale(0.6);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`

export const disappearFromUp: Keyframes = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-100%);
    opacity: 0;
  }
`
