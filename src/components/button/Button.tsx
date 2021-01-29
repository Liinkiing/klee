import React, { FC, forwardRef } from 'react'
import AppBox, { AppBoxProps, FontFamily, PolymorphicComponent } from '../primitives/AppBox'
import styled from 'styled-components'
import { variant as systemVariant } from 'styled-system'
import colors from '../../styles/modules/colors'

export interface ButtonProps extends AppBoxProps {
  readonly variant?: 'primary' | 'secondary'
}

const InnerButton = styled(AppBox)(
  {
    transition: 'background 0.2s, box-shadow 0.3s',
    outline: 'none',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  systemVariant({
    variants: {
      primary: {
        bg: 'indigo.500',
        '&:hover': {
          bg: 'indigo.600',
          '&:focus': {
            boxShadow: `0 0 2px 2px ${colors.indigo['300']}`,
          },
        },
        '&:focus': {
          boxShadow: `0 0 2px 2px ${colors.indigo['300']}`,
        },
        '&:disabled': {
          bg: 'indigo.100',
          color: 'indigo.300',
        },
      },
      secondary: {
        bg: 'blue.500',
        '&:hover': {
          bg: 'blue.600',
          '&:focus': {
            boxShadow: `0 0 2px 2px ${colors.blue['300']}`,
          },
        },
        '&:focus': {
          boxShadow: `0 0 2px 2px ${colors.blue['300']}`,
        },
        '&:disabled': {
          bg: 'blue.100',
          color: 'blue.300',
        },
      },
    },
  }),
) as PolymorphicComponent<ButtonProps>

export const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', ...props }, ref) => {
    return (
      <InnerButton
        display="flex"
        alignItems="center"
        border="none"
        borderRadius="md"
        px={3}
        py={2}
        fontFamily={FontFamily.Body}
        ref={ref}
        as="button"
        color="white"
        variant={variant}
        {...props}
      >
        {children}
      </InnerButton>
    )
  },
)

export default Button
