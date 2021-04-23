import { cx } from '@emotion/css'
import styled from '@emotion/styled'
import React, { FC, ReactElement } from 'react'

import { cleanChildren } from '../../utils/jsx'
import { Flex, FlexProps } from '../layout'
import { BoxProps } from '../primitives'
import { Input } from './Input'

export interface InputGroupProps extends FlexProps {}

type SubComponents = {
  LeftAdon: typeof InputGroupLeftAddon
  RightAddon: typeof InputGroupRightAddon
}

const COMMON_ADDON_PROPS: Partial<FlexProps> = {
  px: 4,
  bg: 'cool-gray.100',
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

const InputGroupInner = styled(Flex)<FlexProps>({
  '& input': {
    zIndex: 1,
  },
})

export const InputGroup: FC<InputGroupProps> & SubComponents = ({ children, ...props }) => {
  const leftAddon = cleanChildren(children).find((c: any) => c.type === InputGroupLeftAddon)
  const input = cleanChildren(children).find((c: any) => c.type === Input)
  const rightAddon = cleanChildren(children).find((c: any) => c.type === InputGroupRightAddon)
  const inputStyles: Partial<BoxProps> = {
    borderTopLeftRadius: !!leftAddon ? 0 : undefined,
    borderBottomLeftRadius: !!leftAddon ? 0 : undefined,
    borderTopRightRadius: !!rightAddon ? 0 : undefined,
    borderBottomRightRadius: !!rightAddon ? 0 : undefined,
  }
  return (
    <InputGroupInner width="100%" align="stretch" {...props}>
      {leftAddon}
      {input && React.cloneElement(input as ReactElement, { ...inputStyles })}
      {rightAddon}
    </InputGroupInner>
  )
}

InputGroup.LeftAdon = InputGroupLeftAddon
InputGroup.RightAddon = InputGroupRightAddon
