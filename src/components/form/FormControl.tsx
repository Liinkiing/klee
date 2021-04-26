import React, { FC, useMemo } from 'react'

import { KleeFontFamily, KleeFontSize, KleeFontWeight } from '../../styles/theme/typography'
import { cleanChildren } from '../../utils/jsx'
import { Flex, FlexProps } from '../layout'
import { Box, BoxProps } from '../primitives'
import { BoxPropsOf } from '../primitives/Box'
import { ErrorMessage } from './ErrorMessage'
import { FormControlContext, useFormControl } from './FormControl.context'

export interface FormControlProps extends Omit<FlexProps, 'id'> {
  readonly id: string
}

export interface FormControlLabelProps extends BoxPropsOf<'label'> {}
export interface FormControlHelperTextProps extends BoxProps {}

type SubComponents = { Label: typeof FormControlLabel; HelperText: typeof FormControlHelperText }

export const FormControlLabel: FC<FormControlLabelProps> = ({ ...props }) => {
  const context = useFormControl()
  return (
    <Box
      fontFamily={KleeFontFamily.Body}
      fontWeight={KleeFontWeight.Semibold}
      as="label"
      {...(context && context.id ? { id: `${context.id}-label`, htmlFor: context.id } : {})}
      {...props}
    />
  )
}

FormControlLabel.displayName = 'FormControl.Label'

export const FormControlHelperText: FC<FormControlHelperTextProps> = ({ ...props }) => {
  const context = useFormControl()
  return (
    <Box
      fontFamily={KleeFontFamily.Body}
      fontSize={KleeFontSize.Sm}
      color="cool-gray.500"
      id={context?.helperId}
      {...props}
    />
  )
}

FormControlHelperText.displayName = 'FormControl.HelperText'

export const FormControl: FC<FormControlProps> & SubComponents = ({ children, id, ...props }) => {
  const hasHelperText = useMemo<boolean>(
    () => !!cleanChildren(children).find((c: any) => c.type === FormControlHelperText),
    [children],
  )
  return (
    <FormControlContext.Provider value={{ id, helperId: hasHelperText ? `${id}-helptext` : undefined }}>
      <Flex width="100%" direction="column" spacing={2} role="group" {...props}>
        {children}
        <ErrorMessage name={id} />
      </Flex>
    </FormControlContext.Provider>
  )
}

FormControl.displayName = 'FormControl'

FormControl.Label = FormControlLabel
FormControl.HelperText = FormControlHelperText
