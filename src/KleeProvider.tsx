/** @jsxRuntime classic */

/** @jsx jsx */
import { jsx, ThemeProvider } from '@emotion/react'
import { FC } from 'react'
import { Provider } from 'reakit/Provider'

import { ToastsContainer } from './components/toast/ToastContainer'
import { CSSReset } from './styles/CSSReset'
import { GlobalFonts } from './styles/GlobalFonts'
import { kleeTheme } from './styles/theme'

interface Props {
  readonly resetCSS?: boolean
}

export const KleeProvider: FC<Props> = ({ resetCSS = true, children }) => {
  return (
    <Provider>
      <ThemeProvider theme={kleeTheme}>
        {resetCSS && <CSSReset />}
        <GlobalFonts />
        <ToastsContainer />
        {children}
      </ThemeProvider>
    </Provider>
  )
}

export default KleeProvider
