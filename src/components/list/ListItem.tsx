import React, { FC } from 'react'
import Box, { BoxProps } from '../primitives/Box'
import { textifyChildren } from '../../utils/jsx'

export interface ListItemProps extends BoxProps {}

export const ListItem: FC<ListItemProps> = ({ children, ...props }) => {
  return (
    <Box as="li" display="flex" alignItems="center" {...props}>
      {textifyChildren(children)}
    </Box>
  )
}

ListItem.displayName = 'List.Item'

export default ListItem
