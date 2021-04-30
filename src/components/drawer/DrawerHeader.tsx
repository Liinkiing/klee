import React, { FC } from 'react'

import { ModalHeader } from '../modal'
import { ModalHeaderProps } from '../modal/ModalHeader'

export interface DrawerHeaderProps extends ModalHeaderProps {}

export const DrawerHeader: FC<DrawerHeaderProps> = ({ ...props }) => <ModalHeader {...props} />

DrawerHeader.displayName = 'Drawer.Body'
