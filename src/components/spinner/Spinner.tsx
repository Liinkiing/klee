import { keyframes } from '@emotion/react'
import type { Properties } from 'csstype'
import React from 'react'
import type { FC } from 'react'
import type { IconType } from 'react-icons'
import { CgSpinnerAlt, CgSpinnerTwoAlt, CgSpinnerTwo, CgSpinner } from 'react-icons/cg'
import { FaSpinner } from 'react-icons/fa'
import {
  ImSpinner,
  ImSpinner2,
  ImSpinner3,
  ImSpinner4,
  ImSpinner5,
  ImSpinner6,
  ImSpinner7,
  ImSpinner8,
  ImSpinner9,
  ImSpinner10,
  ImSpinner11,
} from 'react-icons/im'

import { Icon, IconProps } from '../icon'

type Variant = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15' | '16'

export interface SpinnerProps extends Omit<IconProps, 'as'> {
  readonly variant?: Variant
  /**
   * The animation duration, in seconds
   */
  readonly duration?: number
  readonly easing?: Properties['animationTimingFunction']
}

const spinning = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
`

const getAs = (variant: Variant): IconType => {
  switch (variant) {
    case '1':
      return ImSpinner
    case '2':
      return ImSpinner2
    case '3':
      return ImSpinner3
    case '4':
      return ImSpinner4
    case '5':
      return ImSpinner5
    case '6':
      return ImSpinner6
    case '7':
      return ImSpinner7
    case '8':
      return ImSpinner8
    case '9':
      return ImSpinner9
    case '10':
      return ImSpinner10
    case '11':
      return ImSpinner11
    case '12':
      return FaSpinner
    case '13':
      return CgSpinnerAlt
    case '14':
      return CgSpinnerTwoAlt
    case '15':
      return CgSpinnerTwo
    case '16':
      return CgSpinner
  }
}

export const Spinner: FC<SpinnerProps> = ({ variant = '2', duration = 2, easing = 'ease', ...props }) => {
  return (
    <Icon
      sx={{
        animation: `${spinning} infinite`,
      }}
      style={{
        animationDuration: `${duration}s`,
        animationTimingFunction: easing,
      }}
      as={getAs(variant)}
      {...props}
    />
  )
}
