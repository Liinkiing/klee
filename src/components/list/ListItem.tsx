import React, { FC, forwardRef } from 'react'

import Box, { BoxProps } from '../primitives/Box'
import Text from '../typography/Text'

export interface ListItemProps extends BoxProps {}

export const ListItem: FC<ListItemProps> = forwardRef<HTMLElement, ListItemProps>(({ children, ...props }, ref) => {
  return (
    <Box as="li" display="flex" alignItems="center" ref={ref} {...props}>
      {typeof children === 'string' ? <Text>{children}</Text> : children}
    </Box>
  )
})

ListItem.displayName = 'List.Item'

export default ListItem
