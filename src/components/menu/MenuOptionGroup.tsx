/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { FC, useMemo } from 'react'
import css from '@styled-system/css'
import Box, { BoxProps } from '../primitives/Box'
import { Context, MenuOptionGroupContext } from './MenuOptionGroup.context'
import Text from '../typography/Text'
import { KleeFontSize, KleeFontWeight } from '../../styles/theme/typography'
import { KleeBorder } from '../../styles/theme'

interface Props extends Omit<BoxProps, 'onChange'> {
  readonly title?: string
  readonly type: 'checkbox' | 'radio'
  readonly value?: string | string[]
  readonly onChange?: (newValue: any) => void
}

const MenuOptionGroup: FC<Props> = ({ children, title, value, onChange, type, ...props }) => {
  const context = useMemo<Context>(
    () => ({
      onChange,
      value,
      type,
    }),
    [onChange, value, type],
  )

  return (
    <MenuOptionGroupContext.Provider value={context}>
      <Box
        css={css({
          pointerEvents: 'all',
          '&:first-of-type .menu__option__group--title': {
            borderTop: 'none',
          },
        })}
        role="group"
        {...props}
      >
        {title && (
          <Text
            className="menu__option__group--title"
            color="cool-gray.900"
            fontWeight={KleeFontWeight.Semibold}
            fontSize={KleeFontSize.Xs}
            px={3}
            py={2}
            bg="cool-gray.100"
            borderBottom={KleeBorder.Xs}
            borderTop={KleeBorder.Xs}
            borderColor="cool-gray.300"
            uppercase
          >
            {title}
          </Text>
        )}
        {children}
      </Box>
    </MenuOptionGroupContext.Provider>
  )
}

MenuOptionGroup.displayName = 'Menu.OptionGroup'

export default MenuOptionGroup
