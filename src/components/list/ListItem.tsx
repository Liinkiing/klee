import React, { FC } from 'react'
import Box, { BoxProps } from '../primitives/Box'
import Text from '../typography/Text'

export interface ListItemProps extends BoxProps {}

export const ListItem: FC<ListItemProps> = ({ children, ...props }) => {
  return (
    <Box as="li" display="flex" alignItems="center" {...props}>
      {typeof children === 'string' ? <Text>{children}</Text> : children}
    </Box>
  )
}

ListItem.displayName = 'List.Item'

export default ListItem
