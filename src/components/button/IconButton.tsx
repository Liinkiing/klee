import React, { FC, forwardRef, ReactElement } from 'react'
import { variant as systemVariant } from 'styled-system'
import styled from '@emotion/styled'
import Button, { ButtonProps } from './Button'
import { KleeFontSize } from '../../styles/theme/typography'

export interface IconButtonProps extends Omit<ButtonProps, 'startIcon' | 'endIcon'> {
  icon: ReactElement
}

const IconButtonInner = styled(Button)(
  systemVariant<{}, NonNullable<IconButtonProps['variantSize']>>({
    prop: 'variantSize',
    variants: {
      sm: {
        p: 1,
        fontSize: KleeFontSize.Sm,
      },
      md: {
        p: 2,
        fontSize: KleeFontSize.Sm,
      },
      lg: {
        p: 4,
        fontSize: KleeFontSize.Lg,
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
