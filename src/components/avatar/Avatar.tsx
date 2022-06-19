/** @jsxRuntime classic */

/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'
import ColorHash from 'color-hash-ts'
import { FC, Fragment } from 'react'
import { variant } from 'styled-system'

import { KleeRadius } from '../../styles/theme'
import { KleeFontFamily, KleeFontSize, KleeFontWeight } from '../../styles/theme/typography'
import { colorContrast } from '../../utils/color'
import Flex from '../layout/Flex'
import Box, { BoxProps } from '../primitives/Box'

const hash = new ColorHash()

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface AvatarDetails {
  readonly name?: string
  readonly src?: string
  readonly alt?: string
}

export interface AvatarProps extends BoxProps, AvatarDetails {
  readonly size?: AvatarSize
  readonly showLastname?: boolean
  readonly squared?: boolean
}

const getInitials = (name?: string, showLastname = false): string => {
  if (!name) return ''
  const [firstName, lastName] = name.split(' ')

  if (!showLastname) {
    return firstName.charAt(0)
  }
  if (firstName && lastName) {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`
  }

  return firstName.charAt(0)
}

const AvatarInner = styled(Flex)(
  {
    userSelect: 'none',
  },
  variant<{}, AvatarSize>({
    variants: {
      xs: {
        fontSize: KleeFontSize.Xs,
        size: 6,
        minWidth: 6,
        minHeight: 6,
        maxWidth: 6,
        maxHeight: 6,
      },
      sm: {
        fontSize: KleeFontSize.Sm,
        size: 10,
        minWidth: 10,
        minHeight: 10,
        maxWidth: 10,
        maxHeight: 10,
      },
      md: {
        fontSize: KleeFontSize.Lg,
        size: 12,
        minWidth: 12,
        minHeight: 12,
        maxWidth: 12,
        maxHeight: 12,
      },
      lg: {
        fontSize: KleeFontSize.Xl3,
        size: 14,
        minWidth: 14,
        minHeight: 14,
        maxWidth: 14,
        maxHeight: 14,
      },
      xl: {
        fontSize: KleeFontSize.Xl5,
        size: 16,
        minWidth: 16,
        minHeight: 16,
        maxWidth: 16,
        maxHeight: 16,
      },
    },
  }),
)

export const Avatar: FC<AvatarProps> = ({
  src,
  alt,
  children,
  bg,
  backgroundColor,
  color,
  squared = false,
  showLastname = false,
  size = 'md',
  name = '',
  ...props
}) => {
  const shouldDisplayName = src === null || src === undefined
  const background = hash.hex(name)
  const computedColor = colorContrast(background)

  const render = () => {
    if (children) {
      return <Fragment>{children}</Fragment>
    }
    if (!children && shouldDisplayName) {
      return getInitials(name, showLastname)
    }
    if (!shouldDisplayName) {
      return (
        <Box
          as="img"
          width="100%"
          height="100%"
          css={css({
            objectFit: 'cover',
          })}
          src={src}
          alt={alt ?? name}
          title={alt ?? name}
        />
      )
    }
    return null
  }

  return (
    <AvatarInner
      style={{
        background: !bg && !backgroundColor ? background : undefined,
        color: !color ? computedColor : undefined,
      }}
      {...{
        title: shouldDisplayName ? alt ?? name : undefined,
        bg: bg ?? backgroundColor ?? undefined,
        backgroundColor: bg ?? backgroundColor ?? undefined,
        color: color ?? undefined,
        ...props,
      }}
      borderRadius={squared ? (size === 'xl' ? KleeRadius.Xxl : KleeRadius.Lg) : '100%'}
      overflow="hidden"
      align="center"
      justify="center"
      fontFamily={KleeFontFamily.Body}
      fontWeight={KleeFontWeight.Semibold}
      variant={size}
    >
      {render()}
    </AvatarInner>
  )
}

export default Avatar
