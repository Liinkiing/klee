/** @jsxRuntime classic */

/** @jsx jsx */
import { jsx } from '@emotion/react'
import css from '@styled-system/css'
import { FC } from 'react'
import { FiX } from 'react-icons/fi'

import { KleeFontSize } from '../../styles/theme/typography'
import { IconButton } from '../button/IconButton'
import { Icon } from '../icon'
import { Flex } from '../layout'
import { Box } from '../primitives'
import { BoxProps } from '../primitives/Box'
import { usePopover } from './context'

const PopoverHeader: FC<BoxProps> = ({ children, ...rest }) => {
  const { hide, hideCloseButton } = usePopover()
  return (
    <Flex as="header" p={4} pb={0} align="center" {...rest}>
      <Box
        css={css({
          'h1, h2, h3, h4, h5, h6': {
            fontSize: KleeFontSize.Md,
            fontWeight: 600,
          },
        })}
        flex={1}
      >
        {children}
      </Box>
      {!hideCloseButton && <IconButton p={2} variant="transparent" icon={<Icon as={FiX} />} onClick={hide} />}
    </Flex>
  )
}

PopoverHeader.displayName = 'Popover.Header'

export default PopoverHeader
