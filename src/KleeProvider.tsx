import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import { kleeTheme } from './styles/theme'
import { CSSReset } from './styles/CSSReset'

interface Props {
  readonly resetCSS?: boolean
}

export const KleeProvider: FC<Props> = ({ resetCSS = true, children }) => {
  return (
    <ThemeProvider theme={kleeTheme}>
      {resetCSS && <CSSReset />}
      {children}
    </ThemeProvider>
  )
}

export default KleeProvider
