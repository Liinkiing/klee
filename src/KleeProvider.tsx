/** @jsxRuntime classic */

/** @jsx jsx */
import { jsx, ThemeProvider } from '@emotion/react'
import merge from 'deepmerge'
import { FC, ReactNode, useMemo } from 'react'
import { Provider } from 'reakit/Provider'
import invariant from 'tiny-invariant'

import ColorModeProvider from './components/color-mode-provider/ColorModeProvider'
import type { AppColorScheme } from './components/color-mode-provider/context'
import { ToastsContainer } from './components/toast/ToastContainer'
import { useColorMode } from './hooks'
import { CSSReset } from './styles/CSSReset'
import { GlobalFonts } from './styles/GlobalFonts'
import GlobalStyles from './styles/GlobalStyles'
import { KleeTheme, kleeTheme } from './styles/theme'

interface Props {
  readonly children: ReactNode
  readonly resetCSS?: boolean
  readonly useNunitoFont?: boolean
  readonly defaultColorMode?: AppColorScheme
  readonly theme?: KleeTheme
}

type InnerProps = Required<Pick<Props, 'resetCSS' | 'theme' | 'children' | 'useNunitoFont'>>

const KleeProviderInner: FC<InnerProps> = ({ resetCSS = true, useNunitoFont = true, theme = kleeTheme, children }) => {
  const { mode } = useColorMode()
  const appTheme = useMemo(() => {
    return merge.all([
      theme,
      {
        currentMode: mode,
        colors: theme.modes[mode],
      },
    ])
  }, [theme, mode])
  return (
    <ThemeProvider theme={appTheme}>
      {resetCSS && <CSSReset />}
      <GlobalStyles />
      {useNunitoFont && <GlobalFonts />}
      <ToastsContainer />
      {children}
    </ThemeProvider>
  )
}

export const KleeProvider: FC<Props> = ({
  resetCSS = true,
  useNunitoFont = true,
  theme = kleeTheme,
  defaultColorMode = 'light',
  children,
}) => {
  invariant(
    ['light', 'dark'].includes(defaultColorMode),
    'The `defaultColorMode` must either be "light" or "dark", but you provided "' + defaultColorMode + '"',
  )
  return (
    <Provider>
      <ColorModeProvider defaultColorMode={defaultColorMode}>
        <KleeProviderInner resetCSS={resetCSS} theme={theme} useNunitoFont={useNunitoFont}>
          {children}
        </KleeProviderInner>
      </ColorModeProvider>
    </Provider>
  )
}

export default KleeProvider
