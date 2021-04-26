import styled from '@emotion/styled'
import React, { ComponentProps, forwardRef, PropsWithoutRef } from 'react'
import { useFormContext } from 'react-hook-form'
import { variant } from 'styled-system'

import { BASE_FOCUS } from '../../styles/modules/mixins'
import { KleeBorder, KleeRadius } from '../../styles/theme'
import { KleeFontFamily, KleeFontSize } from '../../styles/theme/typography'
import { CssVars } from '../../utils'
import { useFormControl } from '../form/FormControl.context'
import { Box, BoxProps } from '../primitives'

type FilteredInputProps = Omit<ComponentProps<'input'>, 'css'>
type Props = FilteredInputProps & Omit<BoxProps, keyof FilteredInputProps>
type VariantSize = 'sm' | 'md' | 'lg'
type Variant = 'outline' | 'flushed' | 'blank'

export const DEFAULT_INPUT_RADIUS = KleeRadius.Md

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
        borderRadius: DEFAULT_INPUT_RADIUS,
        border: 0,
        '&:focus': {
          ...BASE_FOCUS,
        },
        '&[aria-invalid="true"]': {
          boxShadow: `var(${CssVars.InvalidFocusBorderColor}) 0px 0px 0px 2px`,
        },
      },
      flushed: {
        border: 0,
        borderRadius: 0,
        borderTopLeftRadius: DEFAULT_INPUT_RADIUS,
        borderTopRightRadius: DEFAULT_INPUT_RADIUS,
        borderBottom: KleeBorder.Xs,
        '&:focus': {
          ...BASE_FOCUS,
          boxShadow: 'none',
          borderBottom: KleeBorder.Sm,
          borderColor: `var(${CssVars.FocusBorderColor})`,
        },
        '&[aria-invalid="true"]': {
          borderColor: `var(${CssVars.InvalidFocusBorderColor})`,
        },
      },
      outline: {
        borderRadius: DEFAULT_INPUT_RADIUS,
        border: KleeBorder.Sm,
        '&:focus': {
          ...BASE_FOCUS,
        },
        '&[aria-invalid="true"]': {
          borderColor: `var(${CssVars.InvalidFocusBorderColor})`,
        },
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
  ({ id, name, disabled, type = 'text', _invalid, ...rest }, ref) => {
    const context = useFormControl()
    const formContext = useFormContext()
    let errors = null
    if (formContext && formContext.formState) {
      const {
        formState: { errors: formErrors },
      } = formContext
      errors = formErrors
    }
    const hasError = errors && name && !!errors[name]
    return (
      <InputInner
        as="input"
        _variants={variants}
        _invalid={{ bg: 'red.50', ..._invalid }}
        minWidth={0}
        width="100%"
        fontFamily={KleeFontFamily.Body}
        borderColor="cool-gray.100"
        type={type}
        name={name}
        ref={ref}
        id={context?.id ?? id ?? name}
        aria-describedby={rest['aria-describedby'] ?? context?.helperId}
        aria-invalid={rest['aria-invalid'] ?? hasError ? 'true' : 'false'}
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
