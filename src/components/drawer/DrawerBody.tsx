import React, { FC } from 'react'

import { ModalBody } from '../modal'
import { ModalBodyProps } from '../modal/ModalBody'

export interface DrawerBodyProps extends ModalBodyProps {}

export const DrawerBody: FC<DrawerBodyProps> = ({ ...props }) => <ModalBody {...props} />

DrawerBody.displayName = 'Drawer.Body'
