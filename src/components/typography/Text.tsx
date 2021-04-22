import React, { forwardRef } from 'react'

import { KleeFontFamily, KleeFontWeight, KleeLineHeight } from '../../styles/theme/typography'
import { jsxInnerText } from '../../utils/jsx'
import Box, { BoxOwnProps, PolymorphicComponent } from '../primitives/Box'

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
      fontFamily={KleeFontFamily.Body}
      fontWeight={KleeFontWeight.Semibold}
      lineHeight={KleeLineHeight.Base}
      {...(truncate ? { title: innerText } : {})}
      {...props}
    >
      {content}
    </Box>
  )
})

Text.displayName = 'Text'

export default Text as PolymorphicComponent<Props>
