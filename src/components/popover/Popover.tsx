/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react'
import { cloneElement, FC, FunctionComponentElement, memo, ReactNode, useMemo } from 'react'
import { Popover as ReakitPopover, PopoverArrow, PopoverDisclosure, usePopoverState } from 'reakit/Popover'
import { AnimatePresence, motion } from 'framer-motion'
import styled from '@emotion/styled'
import { ease } from '../../utils/motion'
import { KleeRadius, KleeShadow } from '../../styles/theme'
import { Flex } from '../layout'
import { IPopoverContext, PopoverContext } from './context'
import PopoverHeader from './PopoverHeader'
import PopoverBody from './PopoverBody'
import PopoverFooter from './PopoverFooter'
import { BoxProps } from '../primitives/Box'
import css from '@styled-system/css'
import { css as emotionCss } from '@emotion/react'
import { TippyProps } from '@tippyjs/react/headless'
import { transparentize } from 'polished'
import { themeGet } from '@styled-system/theme-get'

type RenderProps = (props: IPopoverContext) => ReactNode

export interface PopoverProps
  extends Omit<BoxProps, 'children'>,
    Partial<Pick<TippyProps, 'placement' | 'showOnCreate'>> {
  readonly ariaLabel: string
  readonly vibrancy?: boolean
  readonly hideCloseButton?: boolean
  readonly children: RenderProps | ReactNode
  readonly disclosure: FunctionComponentElement<{}>
}

interface ProviderProps {
  readonly children: ReactNode
  readonly context: IPopoverContext
}

type SubComponents = {
  Header: typeof PopoverHeader
  Body: typeof PopoverBody
  Footer: typeof PopoverFooter
}

const PopoverInner = styled(motion.custom(Flex))({
  '&:focus': {
    outline: 'none',
  },
})

const Provider = memo<ProviderProps>(
  ({ context, children }) => <PopoverContext.Provider value={context}>{children}</PopoverContext.Provider>,
  (prev, current) => prev.context === current.context,
)

const TRANSITION_DURATION = 0.15
const BLUR_AMOUNT = 15

export const Popover: FC<PopoverProps> & SubComponents = ({
  disclosure,
  children,
  ariaLabel,
  bg,
  backgroundColor,
  vibrancy = false,
  placement = 'top',
  showOnCreate = false,
  hideCloseButton = false,
  ...props
}) => {
  const theme = useTheme()
  const popover = usePopoverState({
    modal: true,
    animated: TRANSITION_DURATION * 1000,
    visible: showOnCreate,
    placement,
  })
  const context = useMemo<IPopoverContext>(
    () => ({
      hide: popover.hide,
      show: popover.show,
      toggle: popover.toggle,
      visible: popover.visible,
      hideCloseButton,
    }),
    [popover, hideCloseButton],
  )
  const computedBg = bg ?? backgroundColor ?? 'white'
  return (
    <Provider context={context}>
      <PopoverDisclosure {...popover} ref={disclosure.ref} {...disclosure.props}>
        {disclosureProps => cloneElement(disclosure, disclosureProps)}
      </PopoverDisclosure>
      <ReakitPopover
        {...popover}
        aria-label={ariaLabel}
        css={emotionCss({
          '&:focus': {
            outline: 'none',
          },
        })}
      >
        <AnimatePresence initial={false}>
          {popover.visible && (
            <PopoverInner
              bg={computedBg}
              css={css({
                ...(vibrancy
                  ? {
                      backdropFilter: `blur(${BLUR_AMOUNT}px)`,
                      bg: transparentize(0.5, themeGet(`colors.${computedBg}`, '#000')({ theme })),
                    }
                  : {}),
                '& #arrow': {
                  fill: computedBg,
                  ...(vibrancy
                    ? {
                        backdropFilter: `blur(${BLUR_AMOUNT}px)`,
                        fill: transparentize(0.5, themeGet(`colors.${computedBg}`, '#000')({ theme })),
                      }
                    : {}),
                },
              })}
              direction="column"
              borderRadius={KleeRadius.Lg}
              boxShadow={KleeShadow.Lg}
              minWidth={200}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: TRANSITION_DURATION, ease }}
              exit={{ opacity: 0, scale: 0.8 }}
              {...props}
            >
              <PopoverArrow {...popover} id="arrow" size={16} />
              {typeof children === 'function' ? (children as RenderProps)(context) : children}
            </PopoverInner>
          )}
        </AnimatePresence>
      </ReakitPopover>
    </Provider>
  )
}

Popover.displayName = 'Popover'

Popover.Header = PopoverHeader
Popover.Body = PopoverBody
Popover.Footer = PopoverFooter

export default Popover
