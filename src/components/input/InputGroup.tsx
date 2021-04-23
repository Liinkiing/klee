import { cx } from '@emotion/css'
import styled from '@emotion/styled'
import React, { FC, ReactElement } from 'react'
import { variant } from 'styled-system'

import { cleanChildren } from '../../utils/jsx'
import { Flex, FlexProps } from '../layout'
import { BoxProps } from '../primitives'
import { Input, InputProps } from './Input'

export interface InputGroupProps extends FlexProps, Pick<InputProps, 'variantSize' | 'variant'> {}

type SubComponents = {
  LeftAdon: typeof InputGroupLeftAddon
  RightAddon: typeof InputGroupRightAddon
  LeftElement: typeof InputGroupRightAddon
  RightElement: typeof InputGroupRightAddon
}

const COMMON_ADDON_PROPS: Partial<FlexProps> = {
  bg: 'cool-gray.100',
  align: 'center',
  color: 'cool-gray.600',
}

const COMMON_ELEMENT_PROPS: Partial<FlexProps> = {
  position: 'absolute',
  zIndex: 2,
  align: 'center',
  color: 'cool-gray.600',
}

const INPUT_GROUP_LEFT_ADDON_CN = 'input__group--left-addon'
export const InputGroupLeftAddon: FC<FlexProps> = ({ className, ...props }) => {
  return <Flex className={cx(INPUT_GROUP_LEFT_ADDON_CN, className)} {...COMMON_ADDON_PROPS} {...props} />
}

InputGroupLeftAddon.displayName = 'InputGroup.LeftAddon'

const INPUT_GROUP_RIGHT_ADDON_CN = 'input__group--right-addon'
export const InputGroupRightAddon: FC<FlexProps> = ({ className, ...props }) => {
  return <Flex className={cx(INPUT_GROUP_RIGHT_ADDON_CN, className)} {...COMMON_ADDON_PROPS} {...props} />
}

InputGroupRightAddon.displayName = 'InputGroup.RightAddon'

const INPUT_GROUP_LEFT_ELEMENT_CN = 'input__group--left-element'
export const InputGroupLeftElement: FC<FlexProps> = ({ className, ...props }) => {
  return <Flex left={0} className={cx(INPUT_GROUP_LEFT_ELEMENT_CN, className)} {...COMMON_ELEMENT_PROPS} {...props} />
}

InputGroupLeftElement.displayName = 'InputGroup.LeftElement'

const INPUT_GROUP_RIGHT_ELEMENT_CN = 'input__group--right-element'
export const InputGroupRightElement: FC<FlexProps> = ({ className, ...props }) => {
  return <Flex right={0} className={cx(INPUT_GROUP_RIGHT_ELEMENT_CN, className)} {...COMMON_ELEMENT_PROPS} {...props} />
}

InputGroupRightElement.displayName = 'InputGroup.RightElement'

const InputGroupInner = styled(Flex)<FlexProps>({
  '& input': {
    zIndex: 1,
  },
})

const variants = [
  variant<unknown, NonNullable<InputGroupProps['variantSize']>>({
    prop: 'variantSize',
    variants: {
      sm: {
        [`& .${INPUT_GROUP_LEFT_ADDON_CN}, & .${INPUT_GROUP_RIGHT_ADDON_CN}`]: {
          px: 3,
        },
        [`& .${INPUT_GROUP_LEFT_ELEMENT_CN}, & .${INPUT_GROUP_RIGHT_ELEMENT_CN}`]: {
          height: 8,
          px: 3,
        },
      },
      md: {
        [`& .${INPUT_GROUP_LEFT_ADDON_CN}, & .${INPUT_GROUP_RIGHT_ADDON_CN}`]: {
          px: 4,
        },
        [`& .${INPUT_GROUP_LEFT_ELEMENT_CN}, & .${INPUT_GROUP_RIGHT_ELEMENT_CN}`]: {
          height: 10,
          px: 4,
        },
      },
      lg: {
        [`& .${INPUT_GROUP_LEFT_ADDON_CN}, & .${INPUT_GROUP_RIGHT_ADDON_CN}`]: {
          px: 5,
        },
        [`& .${INPUT_GROUP_LEFT_ELEMENT_CN}, & .${INPUT_GROUP_RIGHT_ELEMENT_CN}`]: {
          height: 12,
          px: 5,
        },
      },
    },
  }),
]

export const InputGroup: FC<InputGroupProps> & SubComponents = ({ children, ...props }) => {
  const leftAddon = cleanChildren(children).find((c: any) => c.type === InputGroupLeftAddon)
  const leftElement = cleanChildren(children).find((c: any) => c.type === InputGroupLeftElement)
  const input = cleanChildren(children).find((c: any) => c.type === Input)
  const rightAddon = cleanChildren(children).find((c: any) => c.type === InputGroupRightAddon)
  const rightElement = cleanChildren(children).find((c: any) => c.type === InputGroupRightElement)
  const inputStyles: Partial<BoxProps> = {
    borderTopLeftRadius: !!leftAddon ? 0 : undefined,
    borderBottomLeftRadius: !!leftAddon ? 0 : undefined,
    borderTopRightRadius: !!rightAddon ? 0 : undefined,
    borderBottomRightRadius: !!rightAddon ? 0 : undefined,
    pl: !!leftElement ? 12 : undefined,
    pr: !!rightElement ? 12 : undefined,
  }
  return (
    <InputGroupInner position="relative" width="100%" align="stretch" _variants={variants} {...props}>
      {leftElement}
      {leftAddon}
      {input &&
        React.cloneElement(input as ReactElement, {
          ...inputStyles,
          variantSize: props.variantSize,
          variant: props.variant,
        })}
      {rightElement}
      {rightAddon}
    </InputGroupInner>
  )
}

InputGroup.defaultProps = {
  variantSize: Input.defaultProps?.variantSize,
  variant: Input.defaultProps?.variant,
}

InputGroup.LeftAdon = InputGroupLeftAddon
InputGroup.RightAddon = InputGroupRightAddon
InputGroup.LeftElement = InputGroupLeftElement
InputGroup.RightElement = InputGroupRightElement
