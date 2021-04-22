import styled from '@emotion/styled'
import { motion, Variant, Variants } from 'framer-motion'
import React, { FC, ReactElement, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { ease } from '../../utils/motion'
import Box, { BoxProps, PolymorphicComponent } from '../primitives/Box'

// While tsdx support the new Typescript template litteral types
type Appear = 'from-left' | 'from-top' | 'from-right' | 'from-bottom'
// type Appear = `from-${'left' | 'top' | 'right' | 'bottom'}`

export interface RevealProps extends BoxProps {
  readonly appear?: Appear
  /**
   * How much does the children needs to be in the viewport to trigger the reveal?
   */
  readonly threshold?: number
  readonly delay?: number
  readonly duration?: number
  /**
   * When having multiple children, staggering them means that they will be animated one after one
   */
  readonly staggerChildren?: number
  readonly initialInView?: boolean
  /**
   * Does the children will be in a fixed position?
   */
  readonly isFixed?: boolean
  /**
   * If not active, the component will not register any enter/exit in viewport and will no trigger animations
   */
  readonly isActive?: boolean
  readonly triggerOnce?: boolean
  readonly onViewEnter?: () => void
  readonly onViewExit?: () => void
}

const getTransform = (appear: Appear): Variant => {
  switch (appear) {
    case 'from-left':
      return {
        y: 0,
        x: -20,
      }
    case 'from-top':
      return {
        y: -20,
        x: 0,
      }
    case 'from-right':
      return {
        y: 0,
        x: 20,
      }
    case 'from-bottom':
      return {
        y: 20,
        x: 0,
      }
  }
}

const variants: Variants = {
  hidden: ({ appear }: { appear: Appear }) => ({
    visibility: 'hidden',
    opacity: 0,
    ...getTransform(appear),
    transition: {
      duration: 0,
    },
  }),
  visible: {
    visibility: 'visible',
    opacity: 1,
    y: 0,
    x: 0,
  },
}

const Container = styled(motion(Box))``

// @ts-ignore
export const Reveal: FC<RevealProps> = ({
  children,
  onViewExit,
  onViewEnter,
  isFixed = false,
  threshold = 0.8,
  duration = 1,
  delay = 0,
  staggerChildren = 0.2,
  triggerOnce = true,
  initialInView = false,
  isActive = true,
  appear = 'from-bottom',
  ...props
}) => {
  const { ref, inView } = useInView({
    triggerOnce,
    initialInView,
    delay,
    threshold,
  })
  useEffect(() => {
    if (inView) {
      onViewEnter?.()
    } else {
      onViewExit?.()
    }
  }, [onViewExit, onViewEnter, inView])
  const validChildren = React.Children.toArray(children).filter(c => React.isValidElement(c))
  if (validChildren.length === 0) return null
  if (validChildren.length === 1) {
    return isActive ? (
      <Container
        style={{
          position: isFixed ? 'fixed' : 'static',
          ...(isFixed
            ? {
                left: 0,
                right: 0,
                bottom: 0,
                top: 0,
              }
            : {}),
        }}
        ref={ref}
        custom={{ appear }}
        variants={variants}
        transition={{ delay, ease, duration }}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        exit="hidden"
        {...props}
      >
        {React.cloneElement(validChildren[0] as ReactElement)}
      </Container>
    ) : (
      children
    )
  }
  return isActive ? (
    <Container
      custom={{ appear }}
      variants={variants}
      transition={{
        delay,
        ease,
        duration,
        staggerChildren,
        delayChildren: delay,
      }}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      exit="hidden"
      {...props}
    >
      {validChildren.map((c, i) =>
        React.cloneElement(
          <motion.div transition={{ ease, duration }} custom={{ appear: appear }} variants={variants}>
            {c}
          </motion.div>,
          { key: i, ...(i === 0 ? { ref } : {}) },
        ),
      )}
    </Container>
  ) : (
    children
  )
}

export default Reveal as PolymorphicComponent<RevealProps>
