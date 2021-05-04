import React, { FC, forwardRef } from 'react'
import { variant } from 'styled-system'

import { useMultipleColorScheme } from '../../hooks/useColorScheme'
import { KleeRadius } from '../../styles/theme'
import { KleeFontFamily, KleeFontSize, KleeFontWeight } from '../../styles/theme/typography'
import { BoxPropsOf, klee } from '../primitives'
import { ColorSchemable } from '../types'

type VariantSize = 'sm' | 'md' | 'lg'

export interface BadgeProps extends BoxPropsOf<'span'>, ColorSchemable {
  readonly variantSize?: VariantSize
}

const variants = [
  variant<unknown, VariantSize>({
    prop: 'variantSize',
    variants: {
      sm: {
        py: 0,
        px: 1,
        fontSize: KleeFontSize.Xs,
      },
      md: {
        p: 1,
        fontSize: KleeFontSize.Md,
      },
      lg: {
        px: 2,
        py: 1,
        fontSize: KleeFontSize.Lg,
      },
    },
  }),
]

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(({ children, colorScheme = 'blue', ...props }, ref) => {
  const styles = useMultipleColorScheme({
    bg: { colorScheme, shading: 100, fallback: 'transparent' },
    color: { colorScheme, shading: 600, fallback: 'black' },
  })
  return (
    <klee.span
      {...styles}
      _variants={variants}
      fontWeight={KleeFontWeight.Semibold}
      borderRadius={KleeRadius.Md}
      fontFamily={KleeFontFamily.Body}
      ref={ref}
      {...props}
    >
      {children}
    </klee.span>
  )
}) as FC<BadgeProps>

Badge.defaultProps = {
  colorScheme: 'blue',
  variantSize: 'md',
}

Badge.displayName = 'Badge'
