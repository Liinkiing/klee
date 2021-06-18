import { cx } from '@emotion/css'
import styled from '@emotion/styled'
import React, { FC, ReactElement } from 'react'
import { variant } from 'styled-system'

import { cleanChildren } from '../../utils/jsx'
import { Flex, FlexProps } from '../layout'
import { BoxProps } from '../primitives'
import { DEFAULT_INPUT_RADIUS, Input, InputProps } from './Input'

export interface InputGroupProps extends FlexProps, Pick<InputProps, 'variantSize' | 'variant'> {}

type SubComponents = {
  LeftAdon: typeof InputGroupLeftAddon
  RightAddon: typeof InputGroupRightAddon
  LeftElement: typeof InputGroupLeftElement
  RightElement: typeof InputGroupRightElement
}

const COMMON_ADDON_PROPS: Partial<FlexProps> = {
  bg: 'input.addons.background',
  align: 'center',
  color: 'input.addons.color',
}

const COMMON_ELEMENT_PROPS: Partial<FlexProps> = {
  position: 'absolute',
  zIndex: 2,
  align: 'center',
  color: 'cool-gray.600',
}

const INPUT_GROUP_LEFT_ADDON_CN = 'input__group--left-addon'
export const InputGroupLeftAddon: FC<FlexProps> = ({ className, ...props }) => {
  return (
    <Flex
      className={cx(INPUT_GROUP_LEFT_ADDON_CN, className)}
      {...COMMON_ADDON_PROPS}
      borderTopLeftRadius={DEFAULT_INPUT_RADIUS}
      borderBottomLeftRadius={DEFAULT_INPUT_RADIUS}
      {...props}
    />
  )
}

InputGroupLeftAddon.displayName = 'InputGroup.LeftAddon'

const INPUT_GROUP_RIGHT_ADDON_CN = 'input__group--right-addon'
export const InputGroupRightAddon: FC<FlexProps> = ({ className, ...props }) => {
  return (
    <Flex
      className={cx(INPUT_GROUP_RIGHT_ADDON_CN, className)}
      {...COMMON_ADDON_PROPS}
      borderTopRightRadius={DEFAULT_INPUT_RADIUS}
      borderBottomRightRadius={DEFAULT_INPUT_RADIUS}
      {...props}
    />
  )
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

const getInputPaddingBasedOnVariant = (size: InputProps['variantSize']) => {
  switch (size) {
    case 'sm':
      return 9
    case 'md':
    default:
      return 11
    case 'lg':
      return 12
  }
}

export const InputGroup: FC<InputGroupProps> & SubComponents = ({ children, ...props }) => {
  const leftAddon = cleanChildren(children).find((c: any) => c.type === InputGroupLeftAddon)
  const leftElement = cleanChildren(children).find((c: any) => c.type === InputGroupLeftElement)
  const input = cleanChildren(children).find((c: any) => c.type === Input || c.ref !== null)
  const rightAddon = cleanChildren(children).find((c: any) => c.type === InputGroupRightAddon)
  const rightElement = cleanChildren(children).find((c: any) => c.type === InputGroupRightElement)
  const inputStyles: Partial<BoxProps> = {
    borderTopLeftRadius: !!leftAddon ? 0 : undefined,
    borderBottomLeftRadius: !!leftAddon ? 0 : undefined,
    borderTopRightRadius: !!rightAddon ? 0 : undefined,
    borderBottomRightRadius: !!rightAddon ? 0 : undefined,
    pl: !!leftElement ? getInputPaddingBasedOnVariant(props.variantSize) : undefined,
    pr: !!rightElement ? getInputPaddingBasedOnVariant(props.variantSize) : undefined,
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
