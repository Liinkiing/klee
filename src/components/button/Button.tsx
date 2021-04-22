import styled from '@emotion/styled'
import React, { cloneElement, FC, forwardRef, ReactElement } from 'react'
import { variant as systemVariant } from 'styled-system'

import colors from '../../styles/modules/colors'
import { KleeFontFamily, KleeFontSize, KleeFontWeight } from '../../styles/theme/typography'
import Box, { BoxProps, PolymorphicComponent } from '../primitives/Box'

type Variant = 'primary' | 'secondary' | 'tertiary' | 'danger' | 'semi-transparent' | 'transparent'
type VariantSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends BoxProps {
  readonly variant?: Variant
  readonly startIcon?: ReactElement
  readonly endIcon?: ReactElement
  readonly variantSize?: VariantSize
}

const generateVariant = (color: keyof typeof colors | 'semi-transparent') => {
  if (color === 'transparent') {
    return {
      bg: 'transparent',
      color: 'inherit',
      '&:hover': {
        bg: `rgba(0,0,0,0.06)`,
        '&:focus': {
          boxShadow: `0 0 2px 3px rgba(0,0,0,0.10)`,
        },
      },
      '&:focus': {
        boxShadow: `0 0 2px 3px rgba(0,0,0,0.10)`,
      },
      '&:disabled': {
        bg: `transparent`,
        opacity: 0.6,
      },
    }
  }
  if (color === 'semi-transparent') {
    return {
      bg: 'rgba(0,0,0,0.3)',
      '&:hover': {
        bg: `rgba(0,0,0,0.5)`,
        '&:focus': {
          boxShadow: `0 0 2px 3px rgba(0,0,0,0.3)`,
        },
      },
      '&:focus': {
        boxShadow: `0 0 2px 3px rgba(0,0,0,0.3)`,
      },
      '&:disabled': {
        bg: `rgba(0,0,0,0.3)`,
      },
    }
  }
  return {
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
  }
}

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
      secondary: generateVariant('cyan'),
      tertiary: generateVariant('cool-gray'),
      danger: generateVariant('rose'),
      transparent: generateVariant('transparent'),
      'semi-transparent': generateVariant('semi-transparent'),
    },
  }),
  systemVariant<{}, VariantSize>({
    prop: 'variantSize',
    variants: {
      sm: {
        px: 2,
        py: 1,
        fontSize: KleeFontSize.Sm,
      },
      md: {
        px: 4,
        py: 2,
        fontSize: KleeFontSize.Sm,
      },
      lg: {
        px: 8,
        py: 4,
        fontSize: KleeFontSize.Lg,
      },
    },
  }),
) as PolymorphicComponent<ButtonProps>

export const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, startIcon, endIcon, variant = 'primary', variantSize = 'md', ...props }, ref) => {
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
        {startIcon && cloneElement(startIcon, { mr: 2 })}
        {children}
        {endIcon && cloneElement(endIcon, { ml: 2 })}
      </InnerButton>
    )
  },
)

export default Button
