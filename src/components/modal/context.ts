import * as React from 'react'

export interface Context {
  readonly hide: () => void
  readonly show: () => void
  readonly toggle: () => void
  readonly hideCloseButton?: boolean
  readonly visible: boolean
}

export const ModalContext = React.createContext<Context>({
  hide: () => {},
  show: () => {},
  toggle: () => {},
  visible: false,
  hideCloseButton: false,
})

export const useModal = (): Context => {
  const context = React.useContext(ModalContext)
  if (!context) {
    throw new Error(`You can't use the ModalContext outsides a Modal component.`)
  }
  return context
}
