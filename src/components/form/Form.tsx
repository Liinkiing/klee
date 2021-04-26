import React from 'react'
import { FieldValues, FormProvider, SubmitHandler, UseFormReturn } from 'react-hook-form'

import { Box } from '../primitives'
import { BoxPropsOf } from '../primitives/Box'

export interface FormProps<T extends FieldValues = any> extends Omit<BoxPropsOf<'form'>, 'onSubmit'> {
  readonly form: UseFormReturn<T>
  readonly onSubmit?: SubmitHandler<T>
}

export const Form = <T extends FieldValues>({ children, form, onSubmit, ...props }: FormProps<T>) => {
  return (
    <FormProvider {...form}>
      <Box as="form" {...props} {...(onSubmit ? { onSubmit: form.handleSubmit(onSubmit) } : {})}>
        {children}
      </Box>
    </FormProvider>
  )
}
