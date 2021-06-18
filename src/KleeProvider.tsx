/** @jsxRuntime classic */

/** @jsx jsx */
import { jsx, ThemeProvider } from '@emotion/react'
import merge from 'deepmerge'
import { FC, useMemo } from 'react'
import { Provider } from 'reakit/Provider'

import ColorModeProvider from './components/color-mode-provider/ColorModeProvider'
import { AppColorScheme, useColorMode } from './components/color-mode-provider/context'
import { ToastsContainer } from './components/toast/ToastContainer'
import { CSSReset } from './styles/CSSReset'
import { GlobalFonts } from './styles/GlobalFonts'
import GlobalStyles from './styles/GlobalStyles'
import { KleeTheme, kleeTheme } from './styles/theme'

interface Props {
  readonly resetCSS?: boolean
  readonly defaultColorMode?: AppColorScheme
  readonly theme?: KleeTheme
}

type InnerProps = Required<Pick<Props, 'resetCSS' | 'theme'>>

const KleeProviderInner: FC<InnerProps> = ({ resetCSS = true, theme = kleeTheme, children }) => {
  const [mode] = useColorMode()
  const appTheme = useMemo(() => {
    return merge.all([
      theme,
      {
        colors: theme.modes[mode],
      },
    ])
  }, [theme, mode])
  return (
    <ThemeProvider theme={appTheme}>
      {resetCSS && <CSSReset />}
      <GlobalStyles />
      <GlobalFonts />
      <ToastsContainer />
      {children}
    </ThemeProvider>
  )
}

export const KleeProvider: FC<Props> = ({
  resetCSS = true,
  theme = kleeTheme,
  defaultColorMode = 'light',
  children,
}) => {
  return (
    <Provider>
      <ColorModeProvider defaultColorMode={defaultColorMode}>
        <KleeProviderInner resetCSS={resetCSS} theme={theme}>
          {children}
        </KleeProviderInner>
      </ColorModeProvider>
    </Provider>
  )
}

export default KleeProvider
