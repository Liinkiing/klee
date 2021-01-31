/** @jsxRuntime classic */
/** @jsx jsx */
import { FC, ReactNode } from 'react'
import { jsx } from '@emotion/react'
import { Menu as HeadlessMenu } from '@headlessui/react'
import styled from '@emotion/styled'
import css from '@styled-system/css'
import Flex from '../layout/Flex'
import { BoxProps } from '../primitives/Box'
import { useMenu } from './Menu.context'
import Text from '../typography/Text'

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
  const { closeOnSelect } = useMenu()
  return (
    // @ts-ignore
    <HeadlessMenu.Item closeOnSelect={closeOnSelect} disabled={disabled}>
      {({ active }) => (
        <MenuListItemInner
          disabled={disabled}
          px={3}
          py={2}
          bg={active ? 'cool-gray.100' : 'transparent'}
          align="center"
          lineHeight="base"
          borderBottom="normal"
          borderColor="cool-gray.200"
          css={css({
            '&:last-of-type': {
              borderBottom: 0,
            },
            '& svg + *': {
              ml: 2,
            },
            '&[disabled]': {
              color: props.color ?? 'cool-gray.500',
            },
          })}
          {...props}
        >
          {typeof children === 'string' ? <Text>{children}</Text> : children}
        </MenuListItemInner>
      )}
    </HeadlessMenu.Item>
  )
}

MenuListItem.displayName = 'Menu.ListItem'

export default MenuListItem
