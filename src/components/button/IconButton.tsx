import styled from '@emotion/styled'
import React, { FC, forwardRef, ReactElement } from 'react'
import { variant as systemVariant } from 'styled-system'

import { KleeFontSize } from '../../styles/theme/typography'
import Button, { ButtonProps } from './Button'

type VariantSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export interface IconButtonProps extends Omit<ButtonProps, 'startIcon' | 'endIcon' | 'variantSize'> {
  icon: ReactElement
  variantSize?: VariantSize
}

const IconButtonInner = styled(Button)(
  systemVariant<{}, NonNullable<IconButtonProps['variantSize']>>({
    prop: 'variantSize',
    variants: {
      xs: {
        p: 1,
        fontSize: KleeFontSize.Xs,
      },
      sm: {
        p: 1,
        fontSize: KleeFontSize.Sm,
      },
      md: {
        p: 2,
        fontSize: KleeFontSize.Md,
      },
      lg: {
        p: 3,
        fontSize: KleeFontSize.Xl2,
      },
      xl: {
        p: 4,
        fontSize: KleeFontSize.Xl5,
      },
    },
  }),
)

export const IconButton: FC<IconButtonProps> = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, icon, variant = 'primary', variantSize = 'md', ...props }, ref) => {
    return (
      <IconButtonInner ref={ref} variant={variant} variantSize={variantSize} {...props}>
        {icon}
      </IconButtonInner>
    )
  },
)

export default IconButton
