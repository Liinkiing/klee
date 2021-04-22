/** @jsxRuntime classic */

/** @jsx jsx */
import { jsx } from '@emotion/react'
import type { PropsOf } from '@emotion/react'
import css from '@styled-system/css'
import { forwardRef } from 'react'
import type { IconType } from 'react-icons'

import Box, { BoxProps } from '../primitives/Box'

type Size = 'xs' | 'sm' | 'md' | 'lg' | (string | {})

export interface IconProps extends Omit<PropsOf<'svg'>, keyof BoxProps>, Omit<BoxProps, 'size'> {
  readonly as?: IconType
  readonly size?: Size
}

const getSize = (size: Size): string => {
  switch (size) {
    case 'xs':
      return '0.7em'
    case 'sm':
      return '1em'
    case 'md':
      return '2em'
    case 'lg':
      return '4em'
    default:
      return size as string
  }
}

export const Icon = forwardRef<SVGElement, IconProps>(
  (
    {
      as: element,
      viewBox,
      color = 'currentColor',
      focusable = false,
      children,
      width,
      height,
      display,
      lineHeight,
      className,
      size = 'sm',
      ...rest
    },
    ref,
  ) => {
    const styles = {
      width: getSize(size) ?? width ?? '1em',
      height: getSize(size) ?? height ?? '1em',
      display: display ?? 'inline-block',
      lineHeight: lineHeight ?? '1em',
      flexShrink: 0,
      color,
    }

    if (element && typeof element !== 'string') {
      return <Box as={element} css={css(styles)} {...rest} />
    }

    return (
      <Box as="svg" verticalAlign="middle" viewBox={viewBox} ref={ref} {...rest} css={css(styles)}>
        {children}
      </Box>
    )
  },
)

export default Icon
