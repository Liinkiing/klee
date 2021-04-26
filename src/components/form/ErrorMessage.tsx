import styled from '@emotion/styled'
import css from '@styled-system/css'
import React, { FC } from 'react'
import { useFormContext } from 'react-hook-form'

import { Box, BoxProps } from '../primitives'

export interface ErrorMessageProps extends BoxProps {
  readonly name?: string
}

const ErrorMessageInner = styled(Box)(css({ color: 'red.300' }))

export const ErrorMessage: FC<ErrorMessageProps> = ({ children, name, ...props }) => {
  const { formState } = useFormContext()
  if (children) {
    return <ErrorMessageInner {...props}>{children}</ErrorMessageInner>
  }
  if (!name) return null
  const { errors } = formState
  if (!errors[name]) return null
  return <ErrorMessageInner {...props}>{errors[name]}</ErrorMessageInner>
}
