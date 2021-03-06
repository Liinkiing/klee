/** @jsxRuntime classic */

/** @jsx jsx */
import { jsx } from '@emotion/react'
import styled from '@emotion/styled'
import css from '@styled-system/css'
import { FC, forwardRef, MouseEventHandler, ReactNode, useCallback } from 'react'
import { MenuItem } from 'reakit/Menu'

import { useColorModeValue } from '../../hooks'
import { KleeLineHeight } from '../../styles/theme/typography'
import Flex from '../layout/Flex'
import { BoxProps } from '../primitives'
import Text from '../typography/Text'
import { MenuProps } from './Menu'
import { useMenu } from './Menu.context'

export interface MenuListItemProps extends BoxProps, Pick<MenuProps, 'closeOnSelect'> {
  readonly disabled?: boolean
  readonly children: ReactNode
}

const MenuListItemInner = styled(Flex)`
  pointer-events: all;
  &[disabled] {
    cursor: not-allowed;
  }
  &:hover {
    cursor: pointer;
    &[disabled] {
      cursor: not-allowed;
    }
  }
  &:active,
  &:focus {
    outline: none;
  }
`

const MenuListItem: FC<MenuListItemProps> = forwardRef<HTMLElement, MenuListItemProps>(
  ({ disabled, children, onClick, closeOnSelect, ...props }, ref) => {
    const { reakitMenu, closeOnSelect: menuCloseOnSelect } = useMenu()
    const onClickHandler = useCallback<MouseEventHandler>(
      e => {
        onClick?.(e)
        const shouldHide = (() => {
          if (closeOnSelect !== undefined && closeOnSelect) {
            return true
          }
          if (closeOnSelect !== undefined && !closeOnSelect) {
            return false
          }
          return menuCloseOnSelect && !closeOnSelect
        })()
        if (shouldHide) {
          reakitMenu.hide()
        }
      },
      [closeOnSelect, menuCloseOnSelect, onClick, reakitMenu],
    )
    return (
      <MenuItem
        as={MenuListItemInner}
        disabled={disabled}
        ref={ref}
        onClick={onClickHandler}
        {...reakitMenu}
        px={3}
        py={2}
        _focus={{ bg: useColorModeValue('cool-gray.100', '#161523') }}
        _disabled={{ opacity: 0.7 }}
        align="center"
        lineHeight={KleeLineHeight.Normal}
        borderColor="cool-gray.200"
        css={css({
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
  },
)
MenuListItem.displayName = 'Menu.ListItem'

export default MenuListItem
