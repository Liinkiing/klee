import { themes } from '@storybook/theming'
import { useDarkMode } from 'storybook-dark-mode'

import KleeProvider from '../src/KleeProvider'
import { kleeTheme } from '../src/styles/theme'

export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
  darkMode: {
    dark: {
      ...themes.dark,
      appBg: kleeTheme.modes.dark.menu.background,
      appContentBg: kleeTheme.modes.dark.background,
      barBg: kleeTheme.modes.dark.background,
    },
    light: {
      ...themes.normal,
    },
  },
}

const ThemeWrapper = ({ children }) => {
  const isDarkMode = useDarkMode()
  return (
    <KleeProvider key={isDarkMode ? 'dark' : 'light'} defaultColorMode={isDarkMode ? 'dark' : 'light'}>
      {children}
    </KleeProvider>
  )
}

export const decorators = [
  Story => (
    <ThemeWrapper>
      <Story />
    </ThemeWrapper>
  ),
]
