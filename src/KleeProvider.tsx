/** @jsxRuntime classic */

/** @jsx jsx */
import { jsx, ThemeProvider } from '@emotion/react'
import { FC } from 'react'
import { Provider } from 'reakit/Provider'

import { ToastsContainer } from './components/toast/ToastContainer'
import { CSSReset } from './styles/CSSReset'
import { GlobalFonts } from './styles/GlobalFonts'
import GlobalStyles from './styles/GlobalStyles'
import { KleeTheme, kleeTheme } from './styles/theme'

interface Props {
  readonly resetCSS?: boolean
  readonly theme?: KleeTheme
}

export const KleeProvider: FC<Props> = ({ resetCSS = true, theme = kleeTheme, children }) => {
  return (
    <Provider>
      <ThemeProvider theme={theme}>
        {resetCSS && <CSSReset />}
        <GlobalStyles />
        <GlobalFonts />
        <ToastsContainer />
        {children}
      </ThemeProvider>
    </Provider>
  )
}

export default KleeProvider
