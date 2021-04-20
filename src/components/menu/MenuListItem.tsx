/** @jsxRuntime classic */
/** @jsx jsx */
import { FC, forwardRef, ReactNode } from 'react'
import { jsx } from '@emotion/react'
import styled from '@emotion/styled'
import css from '@styled-system/css'
import Flex from '../layout/Flex'
import { BoxProps } from '../primitives/Box'
import { useMenu } from './Menu.context'
import Text from '../typography/Text'
import { MenuItem } from 'reakit'
import { KleeLineHeight } from '../../styles/theme/typography'

export interface MenuListItemProps extends BoxProps {
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
  ({ disabled, children, ...props }, ref) => {
    const { reakitMenu } = useMenu()
    return (
      <MenuItem
        as={MenuListItemInner}
        disabled={disabled}
        ref={ref}
        {...props}
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
