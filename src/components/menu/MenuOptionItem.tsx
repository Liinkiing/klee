/** @jsxRuntime classic */

/** @jsx jsx */
import { jsx, Theme } from '@emotion/react'
import css from '@styled-system/css'
import { themeGet } from '@styled-system/theme-get'

import Box, { PolymorphicComponent } from '../primitives/Box'
import Text from '../typography/Text'
import MenuListItem, { MenuListItemProps } from './MenuListItem'
import { useMenuOptionGroup } from './MenuOptionGroup.context'

interface Props extends MenuListItemProps {
  readonly value: string
}

const noop = () => {}

const MenuOptionItem = ({ children, value, ...props }: Props) => {
  const { type, onChange, value: originalValue } = useMenuOptionGroup()
  const isSelected = Array.isArray(originalValue) ? originalValue.includes(value) : originalValue === value
  return (
    <MenuListItem
      {...props}
      onClick={() => {
        if (onChange) {
          if (Array.isArray(originalValue)) {
            onChange(isSelected ? originalValue.filter(v => v !== value) : [...originalValue, value])
          } else {
            onChange(value)
          }
        }
      }}
    >
      <Box
        display="inline-block"
        as="input"
        checked={isSelected}
        onChange={noop}
        css={(theme: Theme) =>
          css({
            pointerEvents: 'none',
            mt: '0 !important',
            mr: `${themeGet('space.2')({ theme })} !important`,
          }) as any
        }
        type={type}
      />
      {typeof children === 'string' ? <Text>{children}</Text> : children}
    </MenuListItem>
  )
}

MenuOptionItem.displayName = 'Menu.OptionItem'

export default MenuOptionItem as PolymorphicComponent<Props>
