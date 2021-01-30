import React, { Children, isValidElement, ReactElement, ReactNode } from 'react'
import Text from '../components/typography/Text'

export const hasProps = (jsx: ReactNode): jsx is ReactElement => Object.prototype.hasOwnProperty.call(jsx, 'props')

export const textifyChildren = (children: ReactNode): ReactNode => {
  return typeof children === 'string' ? <Text>{children}</Text> : children
}

export const jsxInnerText = (jsx: ReactNode): string => {
  if (jsx === null || typeof jsx === 'boolean' || typeof jsx === 'undefined') {
    return ''
  }

  if (typeof jsx === 'number') {
    return jsx.toString()
  }

  if (typeof jsx === 'string') {
    return jsx
  }

  if (Array.isArray(jsx)) {
    return jsx.reduce<string>((acc, node) => acc + jsxInnerText(node), '')
  }

  if (hasProps(jsx) && Object.prototype.hasOwnProperty.call(jsx.props, 'children')) {
    return jsxInnerText(jsx.props.children)
  }

  return ''
}

export const cleanChildren = (children?: ReactNode) => {
  if (!children) return []
  return Children.toArray(children).filter(child => isValidElement(child))
}
