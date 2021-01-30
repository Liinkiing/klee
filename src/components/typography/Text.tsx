import Box, { BoxOwnProps, PolymorphicComponent } from '../primitives/Box'
import { jsxInnerText } from '../../utils/jsx'
import React, { forwardRef } from 'react'
import { KleeLineHeight } from '../../styles/theme/typography'

type Props = BoxOwnProps & {
  readonly truncate?: number
}

const Text = forwardRef<HTMLElement, Props>(({ children, truncate, ...props }, ref) => {
  let content = children
  const innerText = jsxInnerText(content)
  if (truncate && innerText.length > truncate) {
    content = `${innerText.slice(0, truncate)}…`
  }
  return (
    <Box
      ref={ref}
      as="p"
      fontFamily="body"
      {...(truncate ? { title: innerText } : {})}
      lineHeight={KleeLineHeight.Base}
      {...props}
    >
      {content}
    </Box>
  )
})

Text.displayName = 'Text'

export default Text as PolymorphicComponent<Props>
