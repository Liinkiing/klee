/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { FC } from 'react'
import { Button } from '../button'
import { Flex } from '../layout'
import { Box } from '../primitives'
import { Icon } from '../icon'
import { FiX } from 'react-icons/fi'
import { usePopover } from './context'
import { BoxProps } from '../primitives/Box'
import css from '@styled-system/css'
import { KleeFontSize } from '../../styles/theme/typography'

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
      {!hideCloseButton && (
        <Button p={2} variant="semi-transparent" variantSize="sm" onClick={hide}>
          <Icon as={FiX} />
        </Button>
      )}
    </Flex>
  )
}

PopoverHeader.displayName = 'Popover.Header'

export default PopoverHeader
