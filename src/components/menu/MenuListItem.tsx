/** @jsxRuntime classic */
/** @jsx jsx */
import { FC, forwardRef, MouseEventHandler, ReactNode, useCallback } from 'react'
import styled from '@emotion/styled'
import css from '@styled-system/css'
import Flex from '../layout/Flex'
import { BoxProps } from '../primitives/Box'
import { useMenu } from './Menu.context'
import Text from '../typography/Text'
import { MenuItem } from 'reakit/Menu'
import { KleeLineHeight } from '../../styles/theme/typography'
import { MenuProps } from './Menu'

export interface MenuListItemProps extends BoxProps, Pick<MenuProps, 'closeOnSelect'> {
  readonly disabled?: boolean
  readonly children: ReactNode
}

export const MenuListItemInner = styled(Flex)`
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
        {...props}
        onClick={onClickHandler}
        {...reakitMenu}
        px={3}
        py={2}
        _focus={{ bg: 'cool-gray.100' }}
        _disabled={{ color: props.color ?? 'cool-gray.500' }}
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
