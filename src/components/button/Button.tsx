import type { PropsOf, Theme } from '@emotion/react'
import styled from '@emotion/styled'
import { themeGet } from '@styled-system/theme-get'
import React, { cloneElement, FC, forwardRef, PropsWithoutRef, ReactElement } from 'react'
import { variant as systemVariant } from 'styled-system'

import colors from '../../styles/modules/colors'
import { BASE_FOCUS } from '../../styles/modules/mixins'
import { KleeFontFamily, KleeFontSize, KleeFontWeight } from '../../styles/theme/typography'
import { CssVars } from '../../utils'
import Box, { BoxProps, PolymorphicComponent } from '../primitives/Box'

type Variant = 'primary' | 'secondary' | 'tertiary' | 'danger' | 'semi-transparent' | 'transparent'
type VariantSize = 'sm' | 'md' | 'lg'

type HTMLButtonProps = Omit<PropsWithoutRef<PropsOf<'button'>>, 'css'>

export interface ButtonProps extends Omit<BoxProps, keyof HTMLButtonProps>, HTMLButtonProps {
  readonly variant?: Variant
  readonly startIcon?: ReactElement
  readonly endIcon?: ReactElement
  readonly variantSize?: VariantSize
}

const generateVariant = (color: keyof typeof colors | 'semi-transparent', theme: Theme) => {
  if (color === 'transparent') {
    return {
      bg: 'transparent',
      color: 'inherit',
      '&:hover': {
        bg: `rgba(0, 0, 0, 0.06)`,
      },
      '&:focus': {
        boxShadow: theme.currentMode === 'light' ? `0 0 0 2px rgba(0,0,0,0.10)` : `0 0 0 2px rgba(255,255,255,0.20)`,
      },
      '&:disabled': {
        bg: `transparent`,
        opacity: 0.6,
      },
    }
  }
  if (color === 'semi-transparent') {
    return {
      bg: theme.currentMode === 'light' ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.4)',
      '&:hover': {
        bg: theme.currentMode === 'light' ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.2)',
      },
      '&:focus': {
        boxShadow: theme.currentMode === 'light' ? '0 0 0 2px rgba(0,0,0,0.2)' : '0 0 0 2px rgba(255,255,255,0.5)',
      },
      '&:disabled': {
        bg: `rgba(0, 0, 0, 0.3)`,
      },
    }
  }
  return {
    bg: `${color}.500`,
    [`${CssVars.FocusBorderColor}`]: themeGet(`colors.${color}.300`, 'rgb(66 153 225 / 60%)')({ theme }),

    '&:hover': {
      bg: `${color}.600`,
    },
    '&:focus': {
      ...BASE_FOCUS,
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
    '&:disabled': {
      cursor: 'not-allowed',
    },
  },
  ({ theme }) =>
    systemVariant<{}, Variant>({
      variants: {
        primary: generateVariant('indigo', theme),
        secondary: generateVariant('cyan', theme),
        tertiary: generateVariant('cool-gray', theme),
        danger: generateVariant('rose', theme),
        transparent: generateVariant('transparent', theme),
        'semi-transparent': generateVariant('semi-transparent', theme),
      },
    }),
  systemVariant<{}, VariantSize>({
    prop: 'variantSize',
    variants: {
      sm: {
        px: 2,
        py: 1,
        fontSize: KleeFontSize.Xs,
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
        justifyContent="center"
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
