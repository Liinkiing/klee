import styled from '@emotion/styled'
import { AnimatePresence, AnimationProps, motion, MotionProps } from 'framer-motion'
import React, { FC } from 'react'
import { useFormContext } from 'react-hook-form'
import { FiAlertTriangle } from 'react-icons/fi'

import { KleeFontFamily, KleeFontSize, KleeFontWeight } from '../../styles/theme/typography'
import { LAYOUT_TRANSITION_SPRING } from '../../utils/motion'
import { Icon } from '../icon'
import { Flex, FlexProps } from '../layout'

export interface ErrorMessageProps
  extends FlexProps,
    Pick<AnimationProps, 'animate' | 'exit' | 'transition'>,
    Pick<MotionProps, 'initial'> {
  readonly name?: string
}

const ErrorMessageInner = styled(motion(Flex))()

const COMMON_PROPS: Partial<FlexProps> = {
  fontSize: KleeFontSize.Sm,
  fontFamily: KleeFontFamily.Body,
  align: 'center',
  fontWeight: KleeFontWeight.Semibold,
  color: 'red.500',
  role: 'alert',
}

const ErrorIcon = () => <Icon as={FiAlertTriangle} position="relative" top="-1px" mr={2} />

export const ErrorMessage: FC<ErrorMessageProps> = ({
  children,
  name,
  animate,
  initial,
  exit,
  transition,
  ...props
}) => {
  const formContext = useFormContext()
  if (children) {
    return (
      <ErrorMessageInner {...COMMON_PROPS} {...props}>
        <ErrorIcon />
        {children}
      </ErrorMessageInner>
    )
  }
  if (!name) return null
  if (!formContext || !formContext.formState) return null
  const { errors } = formContext.formState
  return (
    <AnimatePresence>
      {errors[name] && errors[name].message && (
        <ErrorMessageInner
          {...COMMON_PROPS}
          key="error-message"
          initial={initial ?? { opacity: 0, y: -10 }}
          animate={animate ?? { opacity: 1, y: 0 }}
          exit={exit ?? { opacity: 0, y: -6 }}
          transition={transition ?? LAYOUT_TRANSITION_SPRING}
          {...props}
        >
          <ErrorIcon />
          {errors[name].message}
        </ErrorMessageInner>
      )}
    </AnimatePresence>
  )
}
