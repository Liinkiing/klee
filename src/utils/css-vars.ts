import { css } from '@emotion/react'

export enum CssVars {
  FocusBorderColor = '--klee-focus-border-color',
}

export const initializeCssVars = css({
  ':root': {
    [CssVars.FocusBorderColor]: 'rgb(66 153 225 / 60%)',
  },
})
