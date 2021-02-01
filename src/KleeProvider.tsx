/** @jsxRuntime classic */
/** @jsx jsx */
import { FC } from 'react'
import { jsx, ThemeProvider } from '@emotion/react'
import { kleeTheme } from './styles/theme'
import { CSSReset } from './styles/CSSReset'
import { GlobalFonts } from './styles/GlobalFonts'
import { Provider } from 'reakit'

interface Props {
  readonly resetCSS?: boolean
}

export const KleeProvider: FC<Props> = ({ resetCSS = true, children }) => {
  return (
    <Provider>
      <ThemeProvider theme={kleeTheme}>
        {resetCSS && <CSSReset />}
        <GlobalFonts />
        {children}
      </ThemeProvider>
    </Provider>
  )
}

export default KleeProvider
