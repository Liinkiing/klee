import React, { forwardRef } from 'react'

import { Input, InputProps } from '../input'

interface FormInputProps extends InputProps {}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(({ ...props }, ref) => {
  return <Input ref={ref} {...props} />
})

FormInput.displayName = 'FormInput'
