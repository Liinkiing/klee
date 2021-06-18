import * as React from 'react'
import { FC, ReactElement } from 'react'

import { KleeBorder } from '../../styles/theme'
import { cleanChildren } from '../../utils/jsx'
import Avatar, { AvatarProps, AvatarSize } from '../avatar/Avatar'
import Flex, { FlexProps } from '../layout/Flex'
import Box, { BoxProps } from '../primitives/Box'

export interface AvatarGroupProps
  extends Omit<BoxProps, 'size'>,
    Pick<FlexProps, 'direction'>,
    Pick<AvatarProps, 'size' | 'squared'> {
  readonly max?: number
}

const getMarginForSize = (size: AvatarSize): number => {
  switch (size) {
    case 'xs':
    case 'sm':
      return -4
    case 'md':
    default:
      return -6
    case 'lg':
      return -10
    case 'xl':
      return -12
  }
}

const getBorderForSize = (size: AvatarSize): string => {
  switch (size) {
    case 'xs':
      return KleeBorder.Sm
    case 'sm':
    case 'md':
    case 'lg':
    default:
      return KleeBorder.Md
    case 'xl':
      return KleeBorder.Lg
  }
}

export const AvatarGroup: FC<AvatarGroupProps> = ({
  children,
  max,
  flexDirection,
  direction,
  size = 'md',
  squared = false,
  ...rest
}) => {
  const validChildren = cleanChildren(children)
  const computedDirection = flexDirection ?? direction ?? 'row'
  const margins = {
    [computedDirection === 'row' ? 'mr' : 'mb']: getMarginForSize(size),
  }
  const computedMax = max ?? validChildren.length
  const count = validChildren.length - computedMax
  const commonProps = {
    size,
    squared,
    color: 'white',
    border: getBorderForSize(size),
    borderColor: 'background',
  }
  const renderAvatarChildren = validChildren.slice(0, computedMax).map((c, i) => (
    <Box {...margins} key={i}>
      {React.cloneElement(c as ReactElement, commonProps)}
    </Box>
  ))
  return (
    <Flex direction={computedDirection} pr={Math.abs(getMarginForSize(size))} {...rest}>
      {renderAvatarChildren}
      {count > 0 && (
        <Avatar {...margins} bg="indigo.500" {...commonProps}>
          +{count}
        </Avatar>
      )}
    </Flex>
  )
}

export default AvatarGroup
