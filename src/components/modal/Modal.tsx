// @flow
import * as React from 'react'
import { FC, FunctionComponentElement, ReactNode, useEffect, useMemo, useRef } from 'react'
import styled from '@emotion/styled'
import { Dialog, DialogDisclosure, DialogProps, useDialogState } from 'reakit/Dialog'
import { AnimatePresence, motion } from 'framer-motion'
import { Box } from '../primitives'
import useIsMobile from '../../hooks/useIsMobile'
import { Context, ModalContext } from './context'
import { ease, LAYOUT_TRANSITION_SPRING } from '../../utils/motion'
import ModalHeader from './ModalHeader'
import ModalBody from './ModalBody'
import ModalFooter from './ModalFooter'
import { KleeRadius, KleeShadow, KleeZIndex } from '../../styles/theme'
import { BoxProps } from '../primitives/Box'

type RenderProps = (props: Context) => ReactNode

export interface ModalProps
  extends Pick<DialogProps, 'hideOnClickOutside' | 'hideOnEsc' | 'preventBodyScroll'>,
    BoxProps {
  readonly hideCloseButton?: boolean
  readonly scrollBehavior?: 'inside' | 'outside'
  readonly disclosure: FunctionComponentElement<{}>
  readonly children: RenderProps | ReactNode
  readonly ariaLabel: string
  readonly onOpen?: () => void
  readonly onClose?: () => void
}

const ModalContainerInner = styled(motion(Box))()

const ModalInner = styled(motion(Box))()

type ProviderProps = { readonly children: ReactNode; readonly context: Context }

const Provider = React.memo<ProviderProps>(
  ({ context, children }: ProviderProps) => <ModalContext.Provider value={context}>{children}</ModalContext.Provider>,
  (prev, current) => prev.context === current.context,
)

const TRANSITION_DURATION = 0.2

type SubComponents = {
  Header: typeof ModalHeader
  Body: typeof ModalBody
  Footer: typeof ModalFooter
}

const Modal: FC<ModalProps> & SubComponents = ({
  children,
  disclosure,
  ariaLabel,
  onOpen,
  onClose,
  scrollBehavior = 'inside',
  hideCloseButton = false,
  hideOnClickOutside = true,
  hideOnEsc = true,
  preventBodyScroll = true,
  ...props
}) => {
  const firstMount = useRef(true)
  const dialog = useDialogState({ animated: TRANSITION_DURATION * 1000 })
  const isMobile = useIsMobile()
  const $container = useRef()
  const context = useMemo(
    () => ({
      hide: dialog.hide,
      show: dialog.show,
      toggle: dialog.toggle,
      visible: dialog.visible,
      hideCloseButton,
    }),
    [dialog, hideCloseButton],
  )
  useEffect(() => {
    if (dialog.visible) {
      if (onOpen) {
        onOpen()
      }
      firstMount.current = false
    } else if (!dialog.visible && !firstMount.current) {
      if (onClose) {
        onClose()
      }
    }
  }, [onOpen, onClose, dialog.visible])

  return (
    <Provider context={context}>
      <DialogDisclosure {...dialog} ref={disclosure.ref} {...disclosure.props}>
        {disclosureProps => React.cloneElement(disclosure, disclosureProps)}
      </DialogDisclosure>
      <Dialog
        {...dialog}
        aria-label={ariaLabel}
        hideOnClickOutside={hideOnClickOutside}
        hideOnEsc={hideOnEsc}
        preventBodyScroll={preventBodyScroll}
      >
        <AnimatePresence>
          {dialog.visible && (
            <ModalContainerInner
              position="fixed"
              left={0}
              right={0}
              bottom={0}
              top={0}
              p={[0, 4]}
              bg={'rgba(0,0,0,0.5)'}
              zIndex={KleeZIndex.Modal}
              display="flex"
              flexDirection="column"
              alignItems="center"
              overflow={scrollBehavior === 'outside' ? 'auto' : undefined}
              ref={$container as any}
              onClick={(e: MouseEvent) => {
                if (e.target === $container.current && hideOnClickOutside) {
                  dialog.hide()
                }
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: TRANSITION_DURATION, ease }}
              exit={{ opacity: 0 }}
            >
              <ModalInner
                display="flex"
                bg="white"
                flexDirection="column"
                mt={['auto', 0]}
                width={['100%', '50%']}
                boxShadow={KleeShadow.Lg}
                borderRadius={KleeRadius.Lg}
                borderBottomLeftRadius={[0, KleeRadius.Lg]}
                borderBottomRightRadius={[0, KleeRadius.Lg]}
                overflow={scrollBehavior === 'inside' ? 'overlay' : undefined}
                initial={{ opacity: 0, y: isMobile ? 20 : -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  opacity: { duration: TRANSITION_DURATION, ease },
                  y: LAYOUT_TRANSITION_SPRING,
                }}
                exit={{ opacity: 0, y: isMobile ? 20 : -20 }}
                {...props}
              >
                {typeof children === 'function' ? (children as RenderProps)(context) : children}
              </ModalInner>
            </ModalContainerInner>
          )}
        </AnimatePresence>
      </Dialog>
    </Provider>
  )
}

Modal.displayName = 'Modal'

Modal.Header = ModalHeader
Modal.Body = ModalBody
Modal.Footer = ModalFooter

export default Modal
