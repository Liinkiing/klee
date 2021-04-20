/** @jsxRuntime classic */
/** @jsx jsx */
import { FC, ReactNode } from 'react'
import { jsx } from '@emotion/react'
import styled from '@emotion/styled'
import css from '@styled-system/css'
import Flex from '../layout/Flex'
import { BoxProps } from '../primitives/Box'
import { useMenu } from './Menu.context'
import Text from '../typography/Text'
import { MenuItem } from 'reakit'

export interface MenuListItemProps extends BoxProps {
  readonly disabled?: boolean
  readonly children: ReactNode
}

const MenuListItemInner = styled(Flex)`
  pointer-events: all;
  &[disabled] {
    pointer-events: none;
  }
  &:hover {
    cursor: pointer;
    &[disabled] {
      pointer-events: none;
      cursor: not-allowed;
    }
  }
  &:active,
  &:focus {
    outline: none;
  }
`

const MenuListItem: FC<MenuListItemProps> = ({ disabled, children, ...props }) => {
  const menu = useMenu()
  return (
    <MenuItem
      as={MenuListItemInner}
      {...props}
      {...menu}
      px={3}
      py={2}
      _focus={{ bg: 'cool-gray.100' }}
      _disabled={{ color: props.color ?? 'cool-gray.500' }}
      align="center"
      lineHeight="base"
      borderBottom="normal"
      borderColor="cool-gray.200"
      sx={css({
        '&:last-of-type': {
          borderBottom: 0,
        },
        '& svg + *': {
          ml: 2,
        },
      })}
      {...props}
    >
      {typeof children === 'string' ? <Text>{children}</Text> : children}
    </MenuItem>
  )
}

MenuListItem.displayName = 'Menu.ListItem'

export default MenuListItem
