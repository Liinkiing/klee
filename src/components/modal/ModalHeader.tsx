/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { FC } from 'react'
import { Flex } from '../layout'
import { Box } from '../primitives'
import { FiX } from 'react-icons/fi'
import { useModal } from './context'
import css from '@styled-system/css'
import { KleeFontSize } from '../../styles/theme/typography'
import { FlexProps } from '../layout/Flex'
import { IconButton } from '../button/IconButton'
import { Icon } from '../icon'

const ModalHeader: FC<FlexProps> = ({ children, ...rest }) => {
  const { hide, hideCloseButton } = useModal()
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
      {!hideCloseButton && <IconButton variant="transparent" icon={<Icon as={FiX} />} onClick={hide} />}
    </Flex>
  )
}

ModalHeader.displayName = 'Modal.Header'

export default ModalHeader
