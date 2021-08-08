import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, UseFormProps } from 'react-hook-form'
import type { TypeOf, ZodSchema } from 'zod'

type Options<T extends ZodSchema<any>> = UseFormProps<TypeOf<T>> & {
  schema: T
}

export const useZodForm = <T extends ZodSchema<any>>({ schema, ...options }: Options<T>) => {
  return useForm({ ...options, resolver: zodResolver(schema) })
}
