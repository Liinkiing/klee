/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react'
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
import { transparentize } from 'polished'
import { themeGet } from '@styled-system/theme-get'

export interface TooltipProps
  extends Omit<BoxProps, 'children'>,
    Partial<Pick<TippyPropsType, 'delay' | 'showOnCreate' | 'onShow' | 'onHide' | 'placement' | 'children'>> {
  readonly trigger?: Array<'mouseenter' | 'focus' | 'click' | 'focusin' | 'manual'>
  readonly label: ReactNode
  readonly vibrancy?: boolean
  readonly useArrow?: boolean
  readonly keepOnHover?: boolean
  readonly isDisabled?: boolean
  readonly truncate?: number
}

const TooltipInner = styled(motion(Box))`
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
const BLUR_AMOUNT = 20

export const Tooltip: FC<TooltipProps> = ({
  children,
  label,
  showOnCreate,
  onShow,
  onHide,
  truncate,
  bg,
  backgroundColor,
  vibrancy = false,
  delay = [null, null],
  trigger = ['mouseenter', 'focus'],
  useArrow = true,
  keepOnHover = false,
  isDisabled = false,
  placement = 'bottom',
  ...props
}) => {
  const theme = useTheme()
  const opacity = useSpring(showOnCreate ? 1 : 0, LAYOUT_TRANSITION_SPRING)
  const scale = useSpring(showOnCreate ? 1 : INITIAL_SCALE, LAYOUT_TRANSITION_SPRING)

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
  const computedBg = bg ?? backgroundColor ?? DEFAULT_BG
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
          bg={computedBg}
          css={css({
            ...(vibrancy
              ? {
                  backdropFilter: `blur(${BLUR_AMOUNT}px)`,
                  bg: transparentize(0.5, themeGet(`colors.${computedBg}`, '#000')({ theme })),
                }
              : {}),
          })}
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
                '&:before': {
                  ...(vibrancy
                    ? {
                        backdropFilter: `blur(${BLUR_AMOUNT}px)`,
                        clipPath: 'polygon(0 0, 100% 0%, 100% 22%, 0% 100%)',
                        bg: transparentize(0.5, themeGet(`colors.${computedBg}`, '#000')({ theme })),
                      }
                    : {
                        bg: computedBg,
                      }),
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
