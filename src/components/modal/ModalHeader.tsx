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
import { FlexProps } from '../layout/Flex'
import { Box } from '../primitives'
import { Heading } from '../typography'
import { useModal } from './context'

export interface ModalHeaderProps extends FlexProps {}

const ModalHeader: FC<ModalHeaderProps> = ({ children, ...rest }) => {
  const { hide, preventClose, hideCloseButton } = useModal()
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
        {typeof children === 'string' ? <Heading as="h2">{children}</Heading> : children}
      </Box>
      {!hideCloseButton && (
        <IconButton
          type="button"
          disabled={preventClose}
          variant="transparent"
          icon={<Icon as={FiX} />}
          onClick={hide}
        />
      )}
    </Flex>
  )
}

ModalHeader.displayName = 'Modal.Header'

export default ModalHeader
