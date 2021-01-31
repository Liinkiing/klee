import React from 'react'

export interface IPopoverContext {
  readonly hide: () => void
  readonly show: () => void
  readonly toggle: () => void
  readonly hideCloseButton?: boolean
  readonly visible: boolean
}

export const PopoverContext = React.createContext<IPopoverContext>({
  hide: () => {},
  show: () => {},
  toggle: () => {},
  visible: false,
  hideCloseButton: false,
})

export const usePopover = (): IPopoverContext => {
  const context = React.useContext(PopoverContext)
  if (!context) {
    throw new Error(`You can't use the ModalContext outsides a Popover component.`)
  }
  return context
}
