/** @jsxRuntime classic */

/** @jsx jsx */
import { jsx } from '@emotion/react'
import styled from '@emotion/styled'
import { useTimeout } from '@liinkiing/react-hooks'
import { motion } from 'framer-motion'
import { FC, ReactNode, useEffect, useMemo, useRef, useState } from 'react'
import { FiAlertCircle, FiCheckCircle, FiInfo, FiX, FiXCircle } from 'react-icons/fi'
import { variant as styledVariant } from 'styled-system'

import colors from '../../styles/modules/colors'
import { fadeOut, slideInDown, slideInLeftToRight, slideInRightToLeft, slideInUp } from '../../styles/modules/keyframes'
import { KleeBorder, SHADOWS } from '../../styles/theme'
import { jsxInnerText } from '../../utils/jsx'
import { IconButton } from '../button/IconButton'
import { Icon } from '../icon'
import { IconProps } from '../icon/Icon'
import { Flex } from '../layout'
import { Box } from '../primitives'
import { Text } from '../typography'

type Variant = 'info' | 'success' | 'danger' | 'warning'

export interface IToast {
  readonly placement?: 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right'
  readonly id: string
  readonly variant: Variant
  readonly closable?: boolean
  readonly duration?: number
  readonly content: ReactNode
  readonly onClose?: () => void
}

export interface ToastProps extends IToast {
  readonly onHide?: (id: string) => void
}

const MIN_TIMEOUT = 1500

const ToastInner = styled(motion(Box))(
  {
    pointerEvents: 'all',
    position: 'relative',
    '& > p': {
      margin: 0,
    },
    '& a': {
      color: 'inherit',
      textDecoration: 'underline',
    },
  },
  ({ theme }) =>
    styledVariant<{}, Variant>({
      variants: {
        danger: {
          color: 'red.900',
          bg: 'red.50',
          boxShadow: `0 -5px 0 ${colors.red[100]}, ${theme.currentMode === 'light' ? SHADOWS.lg : SHADOWS['dark-lg']}`,
        },
        info: {
          color: 'blue.900',
          bg: 'blue.50',
          boxShadow: `0 -5px 0 ${colors.blue[100]}, ${theme.currentMode === 'light' ? SHADOWS.lg : SHADOWS['dark-lg']}`,
        },
        success: {
          color: 'green.900',
          bg: 'green.50',
          boxShadow: `0 -5px 0 ${colors.green[100]}, ${
            theme.currentMode === 'light' ? SHADOWS.lg : SHADOWS['dark-lg']
          }`,
        },
        warning: {
          color: 'amber.900',
          bg: 'amber.50',
          boxShadow: `0 -5px 0 ${colors.amber[100]}, ${
            theme.currentMode === 'light' ? SHADOWS.lg : SHADOWS['dark-lg']
          }`,
        },
      },
    }),
)

const getIcon = (variant: IToast['variant'], props?: IconProps): ReactNode => {
  const common: IconProps = {
    size: 'sm',
    alignSelf: 'flex-start',
    position: 'relative',
    top: '4px',
  }
  switch (variant) {
    case 'info':
      return <Icon as={FiInfo} color="blue.900" {...common} {...props} />
    case 'success':
      return <Icon as={FiCheckCircle} color="green.900" {...common} {...props} />
    case 'danger':
      return <Icon as={FiXCircle} color="red.900" {...common} {...props} />
    case 'warning':
      return <Icon as={FiAlertCircle} color="amber.900" {...common} {...props} />
    default:
      return ''
  }
}

const getAnimation = (placement: IToast['placement']) => {
  switch (placement) {
    case 'top':
    default:
      return slideInUp
    case 'bottom':
      return slideInDown
    case 'top-left':
    case 'bottom-left':
      return slideInRightToLeft
    case 'top-right':
    case 'bottom-right':
      return slideInLeftToRight
  }
}

export const Toast: FC<ToastProps> = ({
  content,
  id,
  onClose,
  onHide,
  duration,
  closable = false,
  placement = 'bottom',
  variant = 'success',
  ...props
}) => {
  const computedDuration = useMemo(
    () =>
      duration !== undefined && duration !== null
        ? duration
        : jsxInnerText(content) !== ''
        ? jsxInnerText(content).length * 100
        : MIN_TIMEOUT,
    [duration, content],
  )
  const [show, setShow] = useState(true)
  const container = useRef<HTMLElement>()
  const clearTimeout = useTimeout(
    () => {
      if (computedDuration && computedDuration > 0) {
        setShow(false)
      }
    },
    computedDuration < MIN_TIMEOUT ? MIN_TIMEOUT : computedDuration,
    [],
  )

  useEffect(() => {
    const $container = container.current
    const endHandler = (evt: AnimationEvent) => {
      if (evt.animationName === fadeOut.name) {
        if (onClose) {
          onClose()
        }
        if (onHide) {
          onHide(id)
        }
      }
    }

    if ($container) {
      $container.addEventListener('animationend', endHandler)
    }

    return () => {
      if ($container) {
        $container.removeEventListener('animationend', endHandler)
      }
    }
  }, [onClose, onHide, id])
  const animation = show ? getAnimation(placement) : fadeOut
  return (
    <ToastInner
      m={2}
      p={4}
      pr={closable ? 10 : undefined}
      borderRadius={KleeBorder.Lg}
      bg="white"
      variant={variant}
      {...props}
      id={id}
      ref={container as any}
      css={{
        animation: `${animation} 0.23s forwards ease-in-out`,
      }}
    >
      <Flex align="center" css={{ '& > *:last-child': { flex: 1 } }}>
        {getIcon(variant, { mr: 2 })}
        {typeof content === 'string' ? <Text dangerouslySetInnerHTML={{ __html: content }} /> : content}
      </Flex>
      {closable && (
        <IconButton
          icon={<Icon as={FiX} />}
          position="absolute"
          top={0}
          right={0}
          onClick={() => {
            clearTimeout()
            setShow(false)
          }}
          variant="transparent"
          css={{
            '&:focus': {
              boxShadow: 'none',
            },
            '&:hover': {
              opacity: 0.5,
              background: 'transparent',
              '&:focus': {
                boxShadow: 'none',
              },
            },
          }}
        />
      )}
    </ToastInner>
  )
}

export default Toast
