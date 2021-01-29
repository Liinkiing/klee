import React, { FC, forwardRef } from 'react'
import Box, { BoxProps, FontFamily, FontSize, FontWeight, PolymorphicComponent } from '../primitives/Box'
import styled from 'styled-components'
import { variant as systemVariant } from 'styled-system'
import colors from '../../styles/modules/colors'

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
        fontSize: FontSize.Sm,
      },
      md: {
        px: 3,
        py: 2,
        fontSize: FontSize.Sm,
      },
      lg: {
        px: 4,
        py: 3,
        fontSize: FontSize.Md,
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
        fontFamily={FontFamily.Body}
        fontWeight={FontWeight.Semibold}
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
