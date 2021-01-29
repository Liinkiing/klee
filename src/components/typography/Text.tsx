import AppBox, { AppBoxOwnProps, LineHeight, PolymorphicComponent } from '../primitives/AppBox'
import jsxInnerText from '../../utils/jsx'
import React, { forwardRef } from 'react'

type Props = AppBoxOwnProps & {
  readonly truncate?: number
}

const Text = forwardRef<HTMLElement, Props>(({ children, truncate, ...props }, ref) => {
  let content = children
  const innerText = jsxInnerText(content)
  if (truncate && innerText.length > truncate) {
    content = `${innerText.slice(0, truncate)}…`
  }
  return (
    <AppBox
      ref={ref}
      as="p"
      fontFamily="body"
      {...(truncate ? { title: innerText } : {})}
      lineHeight={LineHeight.Base}
      {...props}
    >
      {content}
    </AppBox>
  )
})

Text.displayName = 'Text'

export default Text as PolymorphicComponent<Props>
