import React, { FC } from 'react'

import { KleeBorder } from '../../styles/theme'
import { ModalHeader } from '../modal'
import { ModalHeaderProps } from '../modal/ModalHeader'

export interface DrawerHeaderProps extends ModalHeaderProps {}

export const DrawerHeader: FC<DrawerHeaderProps> = ({ ...props }) => (
  <ModalHeader pb={4} borderBottom={KleeBorder.Sm} borderColor="cool-gray.100" {...props} />
)

DrawerHeader.displayName = 'Drawer.Body'
