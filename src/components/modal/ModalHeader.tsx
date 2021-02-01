/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { FC } from 'react'
import { Button } from '../button'
import { Flex } from '../layout'
import { Box } from '../primitives'
import { Icon } from '../icon'
import { FiX } from 'react-icons/fi'
import { useModal } from './context'
import css from '@styled-system/css'
import { KleeFontSize } from '../../styles/theme/typography'
import { FlexProps } from '../layout/Flex'

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
      {!hideCloseButton && (
        <Button p={2} variant="transparent" variantSize="icon" onClick={hide}>
          <Icon as={FiX} />
        </Button>
      )}
    </Flex>
  )
}

ModalHeader.displayName = 'Modal.Header'

export default ModalHeader
