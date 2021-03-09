/** @jsxRuntime classic */
/** @jsx jsx */
import { FC } from 'react'
import { jsx, ThemeProvider } from '@emotion/react'
import { kleeTheme } from './styles/theme'
import { CSSReset } from './styles/CSSReset'
import { GlobalFonts } from './styles/GlobalFonts'
import { ToastsContainer } from './components/toast/ToastContainer'
import { Provider } from 'reakit/Provider'

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
