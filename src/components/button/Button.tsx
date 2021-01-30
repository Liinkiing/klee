import React, { FC, forwardRef } from 'react'
import Box, { BoxProps, PolymorphicComponent } from '../primitives/Box'
import styled from '@emotion/styled'
import { variant as systemVariant } from 'styled-system'
import colors from '../../styles/modules/colors'
import { KleeFontFamily, KleeFontSize, KleeFontWeight } from '../../styles/theme/typography'

type Variant = 'primary' | 'secondary' | 'tertiary' | 'danger'

export interface ButtonProps extends BoxProps {
  readonly variant?: Variant
  readonly variantSize?: 'sm' | 'md' | 'lg'
}

const generateVariant = (color: keyof typeof colors) => ({
  bg: `${color}.500`,
  '&:hover': {
    bg: `${color}.600`,
    '&:focus': {
      boxShadow: `0 0 2px 1px ${colors[color]['600']}`,
    },
  },
  '&:focus': {
    boxShadow: `0 0 2px 1px ${colors[color]['600']}`,
  },
  '&:disabled': {
    bg: `${color}.100`,
    color: `${color}.300`,
  },
})

const InnerButton = styled(Box)(
  {
    transition: 'background 0.2s, box-shadow 0.3s',
    outline: 'none',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  systemVariant<{}, Variant>({
    variants: {
      primary: generateVariant('indigo'),
      secondary: generateVariant('blue'),
      tertiary: generateVariant('cool-gray'),
      danger: generateVariant('red'),
    },
  }),
  systemVariant({
    prop: 'variantSize',
    variants: {
      sm: {
        px: 2,
        py: 1,
        fontSize: KleeFontSize.Sm,
      },
      md: {
        px: 3,
        py: 2,
        fontSize: KleeFontSize.Sm,
      },
      lg: {
        px: 4,
        py: 3,
        fontSize: KleeFontSize.Md,
      },
    },
  }),
) as PolymorphicComponent<ButtonProps>

export const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', variantSize = 'md', ...props }, ref) => {
    return (
      <InnerButton
        display="flex"
        alignItems="center"
        border="none"
        borderRadius="lg"
        fontFamily={KleeFontFamily.Body}
        fontWeight={KleeFontWeight.Semibold}
        ref={ref}
        as="button"
        color="white"
        variant={variant}
        variantSize={variantSize}
        {...props}
      >
        {children}
      </InnerButton>
    )
  },
)

export default Button
