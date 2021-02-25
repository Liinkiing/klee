import * as React from 'react'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import styled from '@emotion/styled'
import { Box } from '../primitives'
import css from '@styled-system/css'
import { KleeZIndex } from '../../styles/theme'
import { Toast, ToastProps } from './Toast'
import { Emitter, UIEvents } from '../../utils/emitter'
import { LAYOUT_TRANSITION_SPRING } from '../../utils/motion'
import { Portal } from 'reakit/Portal'

const ToastWrapper = styled(motion(Box))(
  css({
    width: ['100%', 'auto'],
  }),
)

const ToastContainerInner = styled(Box)(
  css({
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: KleeZIndex.Toast,
  }),
)

interface FilterByPositionParams {
  reverse?: boolean
  toasts: ToastProps[]
  onHide: ToastProps['onHide']
  placement: ToastProps['placement']
}

const filterByPosition = ({ toasts, placement, onHide, reverse = false }: FilterByPositionParams) => {
  let results = toasts.filter(n => n.placement === placement)

  if (reverse) {
    results = results.reverse()
  }

  return results.map(n => (
    <ToastWrapper key={n.id} layout transition={LAYOUT_TRANSITION_SPRING}>
      <Toast {...n} onHide={onHide} />
    </ToastWrapper>
  ))
}

export const ToastsContainer = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([])
  const clearToast = (id: string) => {
    setToasts(v => v.filter(toast => toast.id !== id))
  }
  useEffect(() => {
    const handler = (toast?: ToastProps) => {
      if (!toast) return
      setToasts(n => [...n, toast])
    }

    Emitter.on(UIEvents.ToastShow, handler)

    return () => {
      Emitter.off(UIEvents.ToastShow, handler)
    }
  }, [])

  const visible = toasts.length > 0

  return (
    <Portal>
      <ToastContainerInner
        className="toasts-container toasts-container--top"
        alignItems="center"
        flexDirection="column"
        left={0}
        bottom={0}
        right={0}
        top={4}
        display={visible ? 'flex' : 'none'}
      >
        {filterByPosition({
          toasts,
          onHide: clearToast,
          placement: 'top',
        })}
      </ToastContainerInner>
      <ToastContainerInner
        className="toasts-container toasts-container--top-left"
        flexDirection="column"
        display={visible ? 'flex' : 'none'}
        top={4}
        right={0}
        left={4}
        bottom={0}
        alignItems="flex-start"
      >
        {filterByPosition({
          toasts,
          onHide: clearToast,
          placement: 'top-left',
        })}
      </ToastContainerInner>
      <ToastContainerInner
        className="toasts-container toasts-container--top-right"
        flexDirection="column"
        display={visible ? 'flex' : 'none'}
        top={4}
        left={0}
        right={4}
        bottom={0}
        alignItems="flex-end"
      >
        {filterByPosition({
          toasts,
          onHide: clearToast,
          placement: 'top-right',
        })}
      </ToastContainerInner>
      <ToastContainerInner
        alignItems="center"
        className="toasts-container toasts-container--bottom"
        display={visible ? 'flex' : 'none'}
        flexDirection="column-reverse"
        bottom={4}
        left={0}
        right={0}
        top={0}
      >
        {filterByPosition({
          toasts,
          onHide: clearToast,
          placement: 'bottom',
          reverse: true,
        })}
      </ToastContainerInner>
      <ToastContainerInner
        className="toasts-container toasts-container--bottom-left"
        display={visible ? 'flex' : 'none'}
        left={4}
        right={0}
        bottom={4}
        top={0}
        alignItems="flex-start"
        flexDirection="column-reverse"
      >
        {filterByPosition({
          toasts,
          onHide: clearToast,
          placement: 'bottom-left',
          reverse: true,
        })}
      </ToastContainerInner>
      <ToastContainerInner
        className="toasts-container toasts-container--bottom-right"
        display={visible ? 'flex' : 'none'}
        left={0}
        top={0}
        right={4}
        bottom={4}
        alignItems="flex-end"
        flexDirection="column-reverse"
      >
        {filterByPosition({
          toasts,
          onHide: clearToast,
          placement: 'bottom-right',
          reverse: true,
        })}
      </ToastContainerInner>
    </Portal>
  )
}

export default ToastsContainer
