import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import { kleeTheme } from './styles/theme'
import { CSSReset } from './styles/CSSReset'
import { GlobalFonts } from './styles/GlobalFonts'

interface Props {
  readonly resetCSS?: boolean
}

export const KleeProvider: FC<Props> = ({ resetCSS = true, children }) => {
  return (
    <ThemeProvider theme={kleeTheme}>
      {resetCSS && <CSSReset />}
      <GlobalFonts />
      {children}
    </ThemeProvider>
  )
}

export default KleeProvider
