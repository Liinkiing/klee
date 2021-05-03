import React, { FC } from 'react'

import { Modal, ModalProps } from '../modal'
import { getAnimationPropsBasedOnPlacement, getPropsBasedOnPlacement } from './Drawer.utils'
import { DrawerBody } from './DrawerBody'
import { DrawerFooter } from './DrawerFooter'
import { DrawerHeader } from './DrawerHeader'

export type DrawerPlacement = 'top' | 'bottom' | 'right' | 'left'

export interface DrawerProps extends Omit<ModalProps, 'scrollBehavior'> {
  readonly placement?: DrawerPlacement
}

type SubComponents = {
  Header: typeof DrawerHeader
  Body: typeof DrawerBody
  Footer: typeof DrawerFooter
}

export const Drawer: FC<DrawerProps> & SubComponents = ({
  children,
  overlay,
  minWidth,
  width,
  placement = 'right',
  showOnCreate = false,
  ...props
}) => {
  return (
    <Modal
      scrollBehavior="inside"
      showOnCreate={showOnCreate}
      overlay={{
        p: 0,
        ...overlay,
      }}
      {...getPropsBasedOnPlacement(placement, { minWidth, width })}
      {...getAnimationPropsBasedOnPlacement(placement)}
      {...props}
    >
      {children}
    </Modal>
  )
}

Drawer.Header = DrawerHeader
Drawer.Body = DrawerBody
Drawer.Footer = DrawerFooter

Drawer.displayName = 'Drawer'
