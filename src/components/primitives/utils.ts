import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { FC } from 'react'

import { Box, BoxPropsOf, MotionBoxPropsOf } from './Box'

export const domElements = [
  'a',
  'b',
  'article',
  'aside',
  'blockquote',
  'button',
  'caption',
  'cite',
  'circle',
  'code',
  'dd',
  'div',
  'dl',
  'dt',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'header',
  'hr',
  'img',
  'input',
  'kbd',
  'label',
  'li',
  'main',
  'mark',
  'nav',
  'ol',
  'p',
  'path',
  'pre',
  'q',
  'rect',
  's',
  'svg',
  'section',
  'select',
  'strong',
  'small',
  'span',
  'sub',
  'sup',
  'table',
  'tbody',
  'td',
  'textarea',
  'tfoot',
  'th',
  'thead',
  'tr',
  'ul',
] as const

export type DOMElements = typeof domElements[number]

type Components = {
  a: FC<BoxPropsOf<'a'>>
  b: FC<BoxPropsOf<'b'>>
  article: FC<BoxPropsOf<'article'>>
  aside: FC<BoxPropsOf<'aside'>>
  blockquote: FC<BoxPropsOf<'blockquote'>>
  button: FC<BoxPropsOf<'button'>>
  caption: FC<BoxPropsOf<'caption'>>
  cite: FC<BoxPropsOf<'cite'>>
  circle: FC<BoxPropsOf<'circle'>>
  code: FC<BoxPropsOf<'code'>>
  dd: FC<BoxPropsOf<'dd'>>
  div: FC<BoxPropsOf<'div'>>
  dl: FC<BoxPropsOf<'dl'>>
  dt: FC<BoxPropsOf<'dt'>>
  fieldset: FC<BoxPropsOf<'fieldset'>>
  figcaption: FC<BoxPropsOf<'figcaption'>>
  figure: FC<BoxPropsOf<'figure'>>
  footer: FC<BoxPropsOf<'footer'>>
  form: FC<BoxPropsOf<'form'>>
  h1: FC<BoxPropsOf<'h1'>>
  h2: FC<BoxPropsOf<'h2'>>
  h3: FC<BoxPropsOf<'h3'>>
  h4: FC<BoxPropsOf<'h4'>>
  h5: FC<BoxPropsOf<'h5'>>
  h6: FC<BoxPropsOf<'h6'>>
  header: FC<BoxPropsOf<'header'>>
  hr: FC<BoxPropsOf<'hr'>>
  img: FC<BoxPropsOf<'img'>>
  input: FC<BoxPropsOf<'input'>>
  kbd: FC<BoxPropsOf<'kbd'>>
  label: FC<BoxPropsOf<'label'>>
  li: FC<BoxPropsOf<'li'>>
  main: FC<BoxPropsOf<'main'>>
  mark: FC<BoxPropsOf<'mark'>>
  nav: FC<BoxPropsOf<'nav'>>
  ol: FC<BoxPropsOf<'ol'>>
  p: FC<BoxPropsOf<'p'>>
  path: FC<BoxPropsOf<'path'>>
  pre: FC<BoxPropsOf<'pre'>>
  q: FC<BoxPropsOf<'q'>>
  rect: FC<BoxPropsOf<'rect'>>
  s: FC<BoxPropsOf<'s'>>
  svg: FC<BoxPropsOf<'svg'>>
  section: FC<BoxPropsOf<'section'>>
  select: FC<BoxPropsOf<'select'>>
  strong: FC<BoxPropsOf<'strong'>>
  small: FC<BoxPropsOf<'small'>>
  span: FC<BoxPropsOf<'span'>>
  sub: FC<BoxPropsOf<'sub'>>
  sup: FC<BoxPropsOf<'sup'>>
  table: FC<BoxPropsOf<'table'>>
  tbody: FC<BoxPropsOf<'tbody'>>
  td: FC<BoxPropsOf<'td'>>
  textarea: FC<BoxPropsOf<'textarea'>>
  tfoot: FC<BoxPropsOf<'tfoot'>>
  th: FC<BoxPropsOf<'th'>>
  thead: FC<BoxPropsOf<'thead'>>
  tr: FC<BoxPropsOf<'tr'>>
  ul: FC<BoxPropsOf<'ul'>>
}

type MotionComponents = {
  a: FC<MotionBoxPropsOf<'a'>>
  b: FC<MotionBoxPropsOf<'b'>>
  article: FC<MotionBoxPropsOf<'article'>>
  aside: FC<MotionBoxPropsOf<'aside'>>
  blockquote: FC<MotionBoxPropsOf<'blockquote'>>
  button: FC<MotionBoxPropsOf<'button'>>
  caption: FC<MotionBoxPropsOf<'caption'>>
  cite: FC<MotionBoxPropsOf<'cite'>>
  circle: FC<MotionBoxPropsOf<'circle'>>
  code: FC<MotionBoxPropsOf<'code'>>
  dd: FC<MotionBoxPropsOf<'dd'>>
  div: FC<MotionBoxPropsOf<'div'>>
  dl: FC<MotionBoxPropsOf<'dl'>>
  dt: FC<MotionBoxPropsOf<'dt'>>
  fieldset: FC<MotionBoxPropsOf<'fieldset'>>
  figcaption: FC<MotionBoxPropsOf<'figcaption'>>
  figure: FC<MotionBoxPropsOf<'figure'>>
  footer: FC<MotionBoxPropsOf<'footer'>>
  form: FC<MotionBoxPropsOf<'form'>>
  h1: FC<MotionBoxPropsOf<'h1'>>
  h2: FC<MotionBoxPropsOf<'h2'>>
  h3: FC<MotionBoxPropsOf<'h3'>>
  h4: FC<MotionBoxPropsOf<'h4'>>
  h5: FC<MotionBoxPropsOf<'h5'>>
  h6: FC<MotionBoxPropsOf<'h6'>>
  header: FC<MotionBoxPropsOf<'header'>>
  hr: FC<MotionBoxPropsOf<'hr'>>
  img: FC<MotionBoxPropsOf<'img'>>
  input: FC<MotionBoxPropsOf<'input'>>
  kbd: FC<MotionBoxPropsOf<'kbd'>>
  label: FC<MotionBoxPropsOf<'label'>>
  li: FC<MotionBoxPropsOf<'li'>>
  main: FC<MotionBoxPropsOf<'main'>>
  mark: FC<MotionBoxPropsOf<'mark'>>
  nav: FC<MotionBoxPropsOf<'nav'>>
  ol: FC<MotionBoxPropsOf<'ol'>>
  p: FC<MotionBoxPropsOf<'p'>>
  path: FC<MotionBoxPropsOf<'path'>>
  pre: FC<MotionBoxPropsOf<'pre'>>
  q: FC<MotionBoxPropsOf<'q'>>
  rect: FC<MotionBoxPropsOf<'rect'>>
  s: FC<MotionBoxPropsOf<'s'>>
  svg: FC<MotionBoxPropsOf<'svg'>>
  section: FC<MotionBoxPropsOf<'section'>>
  select: FC<MotionBoxPropsOf<'select'>>
  strong: FC<MotionBoxPropsOf<'strong'>>
  small: FC<MotionBoxPropsOf<'small'>>
  span: FC<MotionBoxPropsOf<'span'>>
  sub: FC<MotionBoxPropsOf<'sub'>>
  sup: FC<MotionBoxPropsOf<'sup'>>
  table: FC<MotionBoxPropsOf<'table'>>
  tbody: FC<MotionBoxPropsOf<'tbody'>>
  td: FC<MotionBoxPropsOf<'td'>>
  textarea: FC<MotionBoxPropsOf<'textarea'>>
  tfoot: FC<MotionBoxPropsOf<'tfoot'>>
  th: FC<MotionBoxPropsOf<'th'>>
  thead: FC<MotionBoxPropsOf<'thead'>>
  tr: FC<MotionBoxPropsOf<'tr'>>
  ul: FC<MotionBoxPropsOf<'ul'>>
}

export const klee: Components = Object.freeze<Components>(
  domElements.reduce((acc, tag) => {
    const Component = styled(Box)()
    Component.displayName = `klee.${tag}`
    Component.defaultProps = {
      as: tag,
    }

    return {
      ...acc,
      [tag]: Component,
    }
  }, {} as Components),
)

export const kmotion: MotionComponents = Object.freeze<MotionComponents>(
  domElements.reduce((acc, tag) => {
    const Component = motion(Box)
    Component.displayName = `kmotion.${tag}`
    Component.defaultProps = {
      as: tag,
    }

    return {
      ...acc,
      [tag]: Component,
    }
  }, {} as MotionComponents),
)
