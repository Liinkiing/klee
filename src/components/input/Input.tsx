import styled from '@emotion/styled'
import React, { ComponentProps, forwardRef, PropsWithoutRef } from 'react'
import { variant } from 'styled-system'

import { BASE_FOCUS } from '../../styles/modules/mixins'
import { KleeBorder, KleeRadius } from '../../styles/theme'
import { KleeFontFamily, KleeFontSize } from '../../styles/theme/typography'
import { CssVars } from '../../utils/css-vars'
import { Box, BoxProps } from '../primitives'

type FilteredInputProps = Omit<ComponentProps<'input'>, 'css'>
type Props = FilteredInputProps & Omit<BoxProps, keyof FilteredInputProps>
type VariantSize = 'sm' | 'md' | 'lg'
type Variant = 'outline' | 'flushed' | 'blank'

export interface InputProps extends PropsWithoutRef<Props> {
  readonly variantSize?: VariantSize
  readonly variant?: Variant
}

const InputInner = styled(Box)<InputProps>({
  transition: 'box-shadow 0.2s, border 0.2s',
})

const variants = [
  variant<unknown, Variant>({
    variants: {
      blank: {
        borderRadius: KleeRadius.Base,
        border: 0,
      },
      flushed: {
        border: 0,
        borderRadius: 0,
        borderBottom: KleeBorder.Xs,
        '&:focus': {
          boxShadow: 'none',
          borderBottom: KleeBorder.Sm,
          borderColor: `var(${CssVars.FocusBorderColor})`,
        },
      },
      outline: {
        borderRadius: KleeRadius.Base,
        border: KleeBorder.Sm,
      },
    },
  }),
  variant<unknown, VariantSize>({
    prop: 'variantSize',
    variants: {
      sm: {
        px: 2,
        height: 8,
        fontSize: KleeFontSize.Sm,
      },
      md: {
        px: 2,
        height: 10,
        fontSize: KleeFontSize.Md,
      },
      lg: {
        px: 3,
        height: 12,
        fontSize: KleeFontSize.Lg,
      },
    },
  }),
]

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, name, disabled, type = 'text', _focus, ...rest }, ref) => {
    return (
      <InputInner
        as="input"
        _variants={variants}
        _focus={{ ...BASE_FOCUS, ..._focus }}
        minWidth={0}
        width="100%"
        fontFamily={KleeFontFamily.Body}
        borderColor="cool-gray.100"
        type={type}
        name={name}
        ref={ref}
        id={id ?? name}
        disabled={disabled}
        {...rest}
      />
    )
  },
)

Input.defaultProps = {
  variant: 'outline',
  variantSize: 'md',
}

Input.displayName = 'Input'