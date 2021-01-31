/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Fragment } from 'react'
import css from '@styled-system/css'
import Tippy from '@tippyjs/react/headless'
import { Instance as TippyInstance } from 'tippy.js'
import { TippyProps as TippyPropsType } from '@tippyjs/react'
import { motion, useSpring } from 'framer-motion'
import styled from '@emotion/styled'
import Box, { BoxProps } from '../primitives/Box'
import { FC, ReactNode } from 'react'
import { LAYOUT_TRANSITION_SPRING } from '../../utils/motion'
import { Text } from '../typography'
import { KleeRadius, KleeShadow } from '../../styles/theme'
import { KleeFontSize } from '../../styles/theme/typography'

export interface TooltipProps
  extends Omit<BoxProps, 'children'>,
    Partial<Pick<TippyPropsType, 'delay' | 'showOnCreate' | 'onShow' | 'onHide' | 'placement' | 'children'>> {
  readonly label: ReactNode
  readonly truncate?: number
  readonly trigger?: Array<'mouseenter' | 'focus' | 'click' | 'focusin' | 'manual'>
  readonly useArrow?: boolean
  readonly isDisabled?: boolean
  readonly keepOnHover?: boolean
}

const TooltipInner = styled(motion.custom(Box))`
  &[data-placement^='top'] > #arrow {
    bottom: -4px;
  }

  &[data-placement^='bottom'] > #arrow {
    top: -4px;
  }

  &[data-placement^='left'] > #arrow {
    right: -4px;
  }

  &[data-placement^='right'] > #arrow {
    left: -4px;
  }
`

const Arrow = styled(Box)`
  &,
  &:before {
    position: absolute;
    width: 8px;
    height: 8px;
    z-index: -1;
  }

  &:before {
    content: '';
    transform: rotate(45deg);
  }
`

const INITIAL_SCALE = 0.8
const DEFAULT_BG = 'cool-gray.500'

export const Tooltip: FC<TooltipProps> = ({
  children,
  label,
  showOnCreate,
  onShow,
  onHide,
  delay = [null, null],
  truncate = 100,
  trigger = ['mouseenter', 'focus'],
  useArrow = true,
  keepOnHover = false,
  isDisabled = false,
  placement = 'bottom',
  ...props
}) => {
  const opacity = useSpring(0, LAYOUT_TRANSITION_SPRING)
  const scale = useSpring(INITIAL_SCALE, LAYOUT_TRANSITION_SPRING)

  const onMount = () => {
    scale.set(1)
    opacity.set(1)
  }

  const onHideHandler = (instance: TippyInstance) => {
    const cleanup = scale.onChange(value => {
      if (value <= INITIAL_SCALE) {
        cleanup()
        if (onHide) {
          onHide(instance)
        }
        instance.unmount()
      }
    })

    scale.set(INITIAL_SCALE)
    opacity.set(0)
  }
  return (
    <Tippy
      disabled={isDisabled}
      placement={placement}
      interactive={keepOnHover}
      delay={trigger.includes('click') ? 0 : delay}
      onMount={onMount}
      showOnCreate={showOnCreate}
      trigger={trigger.join(' ')}
      onHide={onHideHandler}
      animation
      popperOptions={{
        strategy: 'fixed',
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, useArrow ? 10 : 6],
            },
          },
          {
            name: 'arrow',
            options: {
              padding: 6,
            },
          },
        ],
      }}
      {...(onShow && { onShow })}
      render={attrs => (
        <TooltipInner
          p={2}
          bg={DEFAULT_BG}
          color="white"
          borderRadius={KleeRadius.Md}
          boxShadow={KleeShadow.Md}
          fontSize={KleeFontSize.Sm}
          maxWidth="270px"
          {...attrs}
          {...props}
          style={{ scale, opacity }}
        >
          {typeof label === 'string' && <Text truncate={truncate}>{label}</Text>}
          {typeof label !== 'string' && <Fragment>{label}</Fragment>}
          {useArrow && (
            <Arrow
              css={css({
                '&::before': {
                  bg: props.bg ?? props.backgroundColor ?? DEFAULT_BG,
                },
              })}
              id="arrow"
              data-popper-arrow
            />
          )}
        </TooltipInner>
      )}
    >
      {children}
    </Tippy>
  )
}

export default Tooltip
