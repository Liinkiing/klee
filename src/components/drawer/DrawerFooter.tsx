import React, { FC } from 'react'

import { ModalFooter } from '../modal'
import { ModalFooterProps } from '../modal/ModalFooter'

export interface DrawerFooterProps extends ModalFooterProps {}

export const DrawerFooter: FC<DrawerFooterProps> = ({ ...props }) => <ModalFooter {...props} />

DrawerFooter.displayName = 'Drawer.Body'
