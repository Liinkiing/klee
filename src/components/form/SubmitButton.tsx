import React, { FC } from 'react'
import { useFormContext } from 'react-hook-form'

import { Button, ButtonProps } from '../button'

interface SubmitButtonProps extends ButtonProps {}

export const SubmitButton: FC<SubmitButtonProps> = ({ children, ...props }) => {
  const form = useFormContext()
  if (!form) {
    throw new Error('<SubmitButton/> must be used within a <Form/> component')
  }

  const { isValid, isDirty, isSubmitting } = form.formState
  return (
    <Button type="submit" disabled={!isDirty || !isValid || isSubmitting} {...props}>
      {children}
    </Button>
  )
}
