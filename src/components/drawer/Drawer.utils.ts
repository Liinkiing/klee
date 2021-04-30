import { MotionProps } from 'framer-motion'

import { KleeRadius } from '../../styles/theme'
import { CommonAnimations } from '../../utils/motion'
import { DrawerPlacement, DrawerProps } from './Drawer'

export const getPropsBasedOnPlacement = (placement: DrawerPlacement): Partial<DrawerProps> => {
  const X_MIN_WIDTH = '240px'
  switch (placement) {
    case 'top':
      return {
        m: 0,
        width: '100%',
        height: 'auto',
        borderTopLeftRadius: [0, 0],
        borderTopRightRadius: [0, 0],
        borderBottomLeftRadius: KleeRadius.Lg,
        borderBottomRightRadius: KleeRadius.Lg,
      }
    case 'bottom':
      return {
        mt: 'auto',
        width: '100%',
        height: 'auto',
        borderTopLeftRadius: KleeRadius.Lg,
        borderTopRightRadius: KleeRadius.Lg,
        borderBottomLeftRadius: [0, 0],
        borderBottomRightRadius: [0, 0],
      }
    case 'right':
      return {
        m: 0,
        width: 'auto',
        minWidth: X_MIN_WIDTH,
        height: '100%',
        alignSelf: 'flex-end',
        borderTopLeftRadius: KleeRadius.Lg,
        borderBottomLeftRadius: KleeRadius.Lg,
        borderTopRightRadius: [0, 0],
        borderBottomRightRadius: [0, 0],
      }
    case 'left':
      return {
        m: 0,
        width: 'auto',
        minWidth: X_MIN_WIDTH,
        height: '100%',
        alignSelf: 'flex-start',
        borderTopRightRadius: KleeRadius.Lg,
        borderBottomRightRadius: KleeRadius.Lg,
        borderTopLeftRadius: [0, 0],
        borderBottomLeftRadius: [0, 0],
      }
  }
}

export const getAnimationPropsBasedOnPlacement = (placement: DrawerPlacement): Partial<MotionProps> => {
  switch (placement) {
    case 'top':
      return CommonAnimations.SlideFromTop
    case 'bottom':
      return CommonAnimations.SlideFromBottom
    case 'right':
      return CommonAnimations.SlideFromRight
    case 'left':
      return CommonAnimations.SlideFromLeft
  }
}
