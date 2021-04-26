import React, { FC } from 'react'
import { useFormContext } from 'react-hook-form'

import { Button, ButtonProps } from '../button'

interface SubmitButtonProps extends ButtonProps {}

export const SubmitButton: FC<SubmitButtonProps> = ({ children, ...props }) => {
  const { formState } = useFormContext()

  const { isValid, isDirty, isSubmitting } = formState
  return (
    <Button type="submit" disabled={!isDirty || !isValid || isSubmitting} {...props}>
      {children}
    </Button>
  )
}
