import * as React from 'react'

export interface Context {
  readonly id: string
  readonly helperId?: string
}

export const FormControlContext = React.createContext<Context | null>(null)

export const useFormControl = (): Context | null => {
  return React.useContext(FormControlContext)
}
