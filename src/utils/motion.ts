import { MotionProps } from 'framer-motion'

export const LAYOUT_TRANSITION_SPRING = {
  type: 'spring',
  damping: 26,
  stiffness: 340,
}

export const MENU_TRANSITION_DURATION = 0.2

export const ease = [0.48, 0.15, 0.25, 0.96]

type CommonAnimation = 'SlideFromRight' | 'SlideFromLeft' | 'SlideFromTop' | 'SlideFromBottom'

export const CommonAnimations: Record<CommonAnimation, MotionProps> = {
  SlideFromBottom: {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: 20,
    },
  },
  SlideFromTop: {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -20,
    },
  },
  SlideFromLeft: {
    initial: {
      opacity: 0,
      x: -20,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: -20,
    },
  },
  SlideFromRight: {
    initial: {
      opacity: 0,
      x: 20,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: 20,
    },
  },
}
