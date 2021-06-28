import React, { FC } from 'react'

import { KleeBorder } from '../../styles/theme'
import { ModalFooter } from '../modal'
import { ModalFooterProps } from '../modal/ModalFooter'

export interface DrawerFooterProps extends ModalFooterProps {}

export const DrawerFooter: FC<DrawerFooterProps> = ({ ...props }) => (
  <ModalFooter pt={4} borderTop={KleeBorder.Sm} borderColor="drawer.borderColor" {...props} />
)

DrawerFooter.displayName = 'Drawer.Body'
